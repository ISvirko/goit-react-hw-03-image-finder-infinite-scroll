import axios from "axios";

const apiKey = "16727206-7ae7a1f614d6d42142bf6389f";

const fetchImagesWithQuery = (searchQuery, page = 1, perPage) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${perPage}&key=${apiKey}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImagesWithQuery };
