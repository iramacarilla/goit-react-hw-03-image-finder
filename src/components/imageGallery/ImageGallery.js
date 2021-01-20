
/*import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'

class ImageGallery = ({images, onClick}) => {
    componentDidMount() {
        window.addEventListener('keydown', e => {
            if (e.code === 'Escape') 
            {
                
            }
        })
    }
    return (
        <ul className="ImageGallery">
  <ImageGalleryItem images={images} onClick={onClick}/>
</ul>
    )
}

export default ImageGallery*/


import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'

const ImageGallery = ({images, onClick}) => {
    return (
        <ul className="ImageGallery">
  <ImageGalleryItem images={images} onClick={onClick}/>
</ul>
    )
}

export default ImageGallery
