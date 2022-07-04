import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://covid.ourworldindata.org/data',
});

export default instance;
