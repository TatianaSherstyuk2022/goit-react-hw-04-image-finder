import React, { Component } from 'react';
import { Container } from './Container/Container';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { requestImages } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    error: null,
    isLoading: false,
    perPage: 12,
    currentPage: 1,
    totalHits: 0,
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  async componentDidUpdate(_, prevState) {
    const { query, currentPage } = this.state;
    if (prevState.query !== query || prevState.currentPage !== currentPage) {
      this.setState({ isLoading: true });

      try {
        const { totalHits, hits } = await requestImages(query, currentPage);
        this.setState({ images: hits, totalHits: totalHits });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onNextPage = async () => {
    this.setState({ isLoading: true });

    try {
      const { hits } = await requestImages(
        this.state.query,
        (this.state.currentPage += 1)
      );
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { totalHits, images, isLoading } = this.state;
    return (
      <Container>
        <Searchbar handleSubmit={this.handleSubmit} />
        <ImageGallery items={images} />
        {totalHits > 12 && totalHits > images.length && (
          <Button onClick={this.onNextPage} />
        )}
        {isLoading && <Loader />}
      </Container>
    );
  }
}
