import React from 'react';

function ImageGalleryItem({ images, onClick }) {
  return images.map(image => {
    const { webformatURL, tags, id } = image;
    return (
      <li key={id} className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={() => {
            onClick(image);
          }}
        />
      </li>
    );
  });
}

export default ImageGalleryItem;
