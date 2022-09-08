import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YT_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const getYoutubeAPIData = (searchQuery = 'javascript') => {
  const apiOptions = {
    ...options,
    params: {
      ...options.params,
      q: searchQuery,
    },
  };

  return axios.request(apiOptions);
};
