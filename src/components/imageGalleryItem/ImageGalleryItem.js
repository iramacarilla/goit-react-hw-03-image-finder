import React from 'react'

const ImageGalleryItem = ({images, onClick}) => {
    return (
        <>
        { 
            images.map(image => 
             (
         <li className="ImageGalleryItem" key={image.id}>
       <img src={image.webformatURL} alt=""  className="ImageGalleryItem-image" data-source={image.largeImageURL} onClick={onClick}></img> 
     </li>
     )) }
     </>
     )
}

export default ImageGalleryItem;
