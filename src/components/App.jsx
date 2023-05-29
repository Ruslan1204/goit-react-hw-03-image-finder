import { Component } from 'react';

import axios from 'axios';

import { Searchbar } from '../components/Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36083710-9df5b372674412c7298f0bb13';

// let pages = 1;
// let name = null;

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async ({ search = '', page = 1 } = {}) => {
    this.setState({ isLoading: true });

    try {
      const { data } = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
      );
      this.setState({ images: data.hits });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = search => {
    this.fetchData({search});
  };

  render() {
    const { isLoading, images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        <ImageGallery onImages={images} />
        {/* <ImageGalleryItem /> */}

        {/* <Button /> */}
        {/* <Modal /> */}
      </>
    );
  }
}
