import { Component } from 'react';

import axios from 'axios';
import css from './App.module.css';

import { Searchbar } from '../components/Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Button } from './Button/Button';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36083710-9df5b372674412c7298f0bb13';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    search: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    const { search } = this.state;

    if (prevState.search !== search) {
      this.setState({ page: 1 });
    }
  }

  newFetchData = async ({ search, page }) => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });

    this.setState({ isLoading: true });

    try {
      const { data } = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
      }));
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangeSearc = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSearch = evt => {
    evt.preventDefault();
    const { search, page } = this.state;
    const trim = search.trim();

    if (!trim) {
      return;
    } else {
      this.setState({ images: [] });
    }

    this.newFetchData({ search, page });
  };

  render() {
    const { isLoading, images, search, page } = this.state;
    return (
      <div className={css.app}>
        <Searchbar
          onSubmit={this.handleSearch}
          onSearch={search}
          omDisabled={page}
          onChange={this.handleChangeSearc}
        />

        {isLoading && <Loader />}
        <ImageGallery onImages={images} />
        {images.length !== 0 && (
          <Button
            onButton={() => {
              this.newFetchData({ search, page });
            }}
          />
        )}
      </div>
    );
  }
}

// fetchData = async ({ search = '' }) => {
//   this.setState({ isLoading: true });

//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=12`
//     );
//     this.setState({ images: data.hits });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     this.setState({ isLoading: false });
//   }
// };

// newFetchData = async ({ search, page }) => {

//   this.setState(prevState => {
//     return { page: prevState.page + 1 };
//   });

//   this.setState({ isLoading: true });

//   try {
//     const { data } = await axios.get(
//       `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
//     );
//     this.setState(prevState => ({
//       images: [...prevState.images, ...data.hits],
//     }));
//   } catch (error) {
//     console.log(error);
//   } finally {
//     this.setState({ isLoading: false });
//   }
// };

// handleChangePage = (search, page) => {

//   // handleChangePage = async (search, page) => {
//   // const { page } = this.state;
//   // this.setState(prevState => {
//   //   return { page: prevState.page + 1 };
//   // });

//   // this.setState({ isLoading: false });

//   // try {
//   //   const { data } = await axios.get(
//   //     `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//   //   );
//   //   this.setState(prevState => ({
//   //     images: [...prevState.images, ...data.hits],
//   //   }));
//   // } catch (error) {
//   //   console.log(error);
//   // }
// };

// export class App extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//   };

//   async componentDidMount(isLoading) {
//     if (!isLoading) {
//       return;
//     }
//     this.fetchData({});
//   }

//   // async componentDidUpdate(_, prevState) {
//   //   const { images } = this.state;

//   //   if (prevState.length !== 0 && prevState.length !== images.length) {
//   //     this.newFetchData({images})
//   //     // this.newFetchData()
//   //     console.log('componentDidUpdate');
//   //   }
//   // }

//   fetchData = async ({ search = '', page = 1 }) => {
//     this.setState({ isLoading: true });

//     try {
//       const { data } = await axios.get(
//         `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//       );
//       this.setState({ images: data.hits });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   newFetchData = async (search, page) => {
//     this.setState({ isLoading: false });

//     try {
//       const { data } = await axios.get(
//         `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//       );
//       this.setState(prevState => ({
//         images: [...prevState.images, ...data.hits],
//       }));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   handleSearch = search => {
//     this.fetchData({ search });
//   };

//   render() {
//     const { isLoading, images } = this.state;

//     return (
//       <div className={css.app}>
//         {
//           <Searchbar
//             onSubmit={this.handleSearch}
//             onButton={this.newFetchData}
//             onImages={images}
//           />
//         }
//         {isLoading && <Loader />}
//       </div>
//     );
//   }
// }
