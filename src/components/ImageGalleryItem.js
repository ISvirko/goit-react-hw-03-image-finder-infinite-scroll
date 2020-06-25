import React from 'react';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onGetLargeImageUrl,
}) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={tags}
      className="ImageGalleryItem-image"
      onClick={() => onGetLargeImageUrl(largeImageURL)}
    />
  </li>
);

export default ImageGalleryItem;
