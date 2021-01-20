
import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css'

const ImageGallery = ({images, onClick}) => {
    return (
        <ul className={styles.ImageGallery}>
  <ImageGalleryItem images={images} onClick={onClick}/>
</ul>
    )
}
ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
  }
export default ImageGallery
