import React, { useState } from "react";
import PropTypes from "prop-types";

const CardProduct = ({ title, content, imageUrl, onHoverImage }) => {
  const [currentImage, setCurrentImage] = useState(imageUrl);
  return (
    <div
      className="max-w-sm rounded overflow-hidden"
      onMouseEnter={() => setCurrentImage(onHoverImage)}
      onMouseLeave={() => setCurrentImage(imageUrl)}
    >
      {imageUrl && <img className="w-full " src={currentImage} alt={title} />}
      <div className="px-6 py-4">
        <div className="text-xs uppercase mb-2">{title}</div>
        <p className="text-gray-700 text-xs">{content}</p>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  onHoverImage: PropTypes.string.isRequired,
};

CardProduct.defaultProps = {
  imageUrl: null,
  onHoverImage: null,
};

export default CardProduct;
