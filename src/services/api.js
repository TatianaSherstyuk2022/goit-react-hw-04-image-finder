import axios from 'axios';

export async function requestImages(query, page = 1) {
  const url = 'https://pixabay.com/api/';
  const key = '32822107-27ee419a7500914fb13297221';
  const filter = `?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

  const { data } = await axios.get(`${url}${filter}`);

  return data;
}
