
import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

const ImageGallery = ({images, onClick}) => {
    return (
        <ul className="ImageGallery">
  <ImageGalleryItem images={images} onClick={onClick}/>
</ul>
    )
}
ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
  }
export default ImageGallery
