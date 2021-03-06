import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';
import Loader from './components/Loader';
import pixabayApi from './services/pixabayApi';

class App extends Component {
  state = {
    images: [],
    value: '',
    modal: false,
    isLoading: false,
    linkModal: {},
    page: 1,
    button: true,
  };

   componentDidUpdate() {
    window.scrollTo({
      top:
        document.documentElement.scrollTop +
        document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  }
  
  onSubmitForm = value => {
    if (value) {
      this.setState({ isLoading: true });
        
      pixabayApi(value, 1)
        .then(({ data }) => data.hits)
        .then(data =>
          this.setState({
            images: data,
            value: value,
            page: 2,
            isLoading: false,
            button: data.length === 12,
          }),
        )
        .catch(error => console.error({ error }));
    } else {
      alert('введите значение');
    }
  };
  
  loadMore = () => {
    const { value, page, images } = this.state;
    this.setState({ isLoading: true });
    pixabayApi(value, page)
      .then(({ data }) => data.hits)
      .then(data =>
        this.setState({
          images: [...images, ...data],
          isLoading: false,
          button: data.length === 12,
        }),
      );
    this.setState(state => {
      return { page: state.page + 1 };
    });
  };
  
  showModal = img => {
    const { modal } = this.state;
    img
      ? this.setState({ linkModal: img, modal: !modal })
      : this.setState({ modal: !modal });
  };
  
  closeModal = event => {
    const { modal } = this.state;
    if (event.target.nodeName === 'DIV') {
      this.setState({ modal: !modal });
    }
  };
  render() {
    
        return (
      <div>
            <Searchbar onSubmitForm={this.onSubmitForm} />
            {this.state.images.length === 0 ? (
          <h1>Please enter your search term</h1>
        ) : (
          <ImageGallery images={this.state.images} openModal={this.showModal} />
            )}
            {this.state.modal && (
          <Modal
            showModal={this.showModal}
            clouseModal={this.closeModal}
            img={this.state.linkModal}
          />
            )}
             {this.state.images.length !== 0 && this.state.button && (
               <Button loadMore={this.loadMore} />
               )}
               {this.state.isLoading && <Loader />}
      </div>
    );
  }
}

export default App;

