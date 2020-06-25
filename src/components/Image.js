import React from 'react';

const Image = ({ image }) => (
  <img
    src={image.webformatURL}
    alt={image.tags}
    className="ImageGalleryItem-image"
  />
);

export default Image;
