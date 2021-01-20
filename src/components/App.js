import axios from 'axios'
import React, { Component } from 'react'
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem'
import ImageGallery from './imageGallery/ImageGallery'
import fetchImgSearchItem from '../utils/fetchImgSearchItem'
import Loading from './loader/Loader'
import Searchbar from './searchbar/Searchbar'
import Button from './button/Button'
import Modal from './modal/Modal'

export default class App extends Component {
  state = {
    images: [],
    loader: false,
    error: null,
    page: 1,
    searchItem:'',
    largeImage: null,
  } 
componentDidMount() {
  //this.setState({loading: true});  
  //this.fetchQuery('cat')
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchItem !== this.state.searchItem)
    {
      this.fetchQuery(this.state.searchItem)
    }
    if (prevState.searchItem === this.state.searchItem)
    {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', e => {
        if (e.code === 'Escape') 
        {
          this.setState({largeImage: null})
        }
    })
 }
  setLargeImg = (e) => {
    const url = e.target.dataset.source;
    this.setState({largeImage: url})
    console.log(url);
   
  }

  fetchQuery = () => {
  const {searchItem, page} = this.state;

  this.setState({loading: true});

  fetchImgSearchItem.fetchImgSearchItem(searchItem, page)
  .then(images => this.setState(prevState => ({images: [...prevState.images, ...images], 
    page: (prevState.page + 1)})))
  .catch ((error) => this.setState({error}))
  .finally(() => this.setState({loading: false}))
  }

  handelSearchQuery = (query) => {
    this.setState({searchItem: query, page: 1,  images: []})
  }



  render() {
    const {error, loading, images, largeImage} = this.state;
    return (
      <>
    <Searchbar onSubmit={this.handelSearchQuery}/>
     {loading && <Loading />}
    
     {images.length > 0 && <ImageGallery images={images} onClick={this.setLargeImg}/>}
     
     {images.length > 0 && !loading && <Button onClick={this.fetchQuery} />}

     {this.state.largeImage && <Modal><img src={largeImage} alt="" ></img></Modal>  }
      </>
    )
    
}
}


