import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ images, onGetLargeImageUrl }) => (
  <ul className="ImageGallery">
    {images.map((image) => (
      <ImageGalleryItem
        key={image.id}
        {...image}
        onGetLargeImageUrl={onGetLargeImageUrl}
      />
    ))}
  </ul>
);

export default ImageGallery;
