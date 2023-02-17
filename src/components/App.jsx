import React, { useState, useEffect } from 'react';
import { Container } from './Container/Container';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { requestImages } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export function App() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleSubmit = query => {
    setImages([]);
    setQuery(query);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { hits, totalHits } = await requestImages(query, currentPage);
        setImages(prevState => [...prevState, ...hits]);

        setTotalHits(totalHits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query !== '') fetchData();
  }, [query, currentPage]);

  const onNextPage = async () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Searchbar handleSubmit={handleSubmit} />
      <ImageGallery items={images} />
      {totalHits > 12 && totalHits > images.length && (
        <Button onClick={onNextPage} />
      )}
      {isLoading && <Loader />}
    </Container>
  );
}
