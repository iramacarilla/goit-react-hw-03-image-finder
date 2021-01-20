import React from 'react'
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({images, onClick}) => {
    return (
        <>
        { 
            images.map(image => 
             (
         <li className={styles.ImageGalleryItem} key={image.id}>
       <img src={image.webformatURL} alt=""  className="ImageGalleryItem-image" data-source={image.largeImageURL} onClick={onClick}></img> 
     </li>
     )) }
     </>
     )
}
ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}
export default ImageGalleryItem;
