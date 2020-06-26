import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import imagesApi from "../services/imagesApi";
import Spinner from "./Spinner";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import Notification from "./Notification";
import LargeImg from "./LargeImg";
import ToTopButton from "./ToTopButton";

const smoothScroll = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

class App extends Component {
  state = {
    images: [],
    error: null,
    searchQuery: "",
    page: 1,
    perPage: 12,
    largeImg: null,
    atTheTop: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchQuery, page, perPage } = this.state;
    this.setState({ hasMore: true });

    try {
      const result = await imagesApi.fetchImagesWithQuery(
        searchQuery,
        page,
        perPage
      );

      this.setState((prev) => ({
        images: [...prev.images, ...result.data.hits],
        page: prev.page + 1,
        hasMore: result.data.total > 0 ? true : false,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  handleSearchSubmit = (query) => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  getLargeImageUrl = (largeImageURL) => {
    this.setState({ largeImg: largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  toggleButton = () => {
    this.setState((prev) => ({ atTheTop: !prev.atTheTop }));
    this.state.atTheTop ? smoothScroll() : window.scrollTo(0, 0);
  };

  render() {
    const { images, error, largeImg, atTheTop, hasMore } = this.state;

    return (
      <div className="App">
        {error && (
          <Notification
            message={"Whoops, something went wrong"}
            error={error.message}
            type={"danger"}
          />
        )}
        <>
          <Searchbar onSubmit={this.handleSearchSubmit} />

          {!hasMore && (
            <>
              <div className="NotFound"></div>
              <Notification
                message="Whoops, something went wrong"
                error="No matches found"
                type="danger"
              />
            </>
          )}
        </>
        <>
          <InfiniteScroll
            dataLength={images.length}
            next={this.fetchImages}
            hasMore={hasMore}
            loader={<Spinner />}
          >
            <ImageGallery
              images={images}
              onGetLargeImageUrl={this.getLargeImageUrl}
            />
          </InfiniteScroll>

          {images.length > 0 && (
            <ToTopButton atTheTop={atTheTop} toggleButton={this.toggleButton} />
          )}

          {largeImg && (
            <Modal onCloseModal={this.closeModal}>
              <LargeImg largeImg={largeImg} closeModal={this.closeModal} />
            </Modal>
          )}
        </>
      </div>
    );
  }
}

export default App;
