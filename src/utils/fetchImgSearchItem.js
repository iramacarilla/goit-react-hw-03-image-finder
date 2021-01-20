import axios from 'axios';

const fetchImgSearchItem = (searchQuery, page=1) => {
  return axios
  .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=19520761-48ad5b9d4b9d0975ec43def51&image_type=photo&orientation=horizontal&per_page=5`)
  .then(response => response.data.hits)
  
};

export default {fetchImgSearchItem, };