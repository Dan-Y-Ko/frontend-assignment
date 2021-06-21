import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_DOMAIN}/`,
  params: {
        api_key: `${process.env.REACT_APP_MOVIE_DB_API_KEY}`
    }
});

export default instance;