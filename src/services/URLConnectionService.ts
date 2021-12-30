import axios from 'axios';

const makeRequest = (url: string) => {
  try {
    console.log(url);
    return axios.get(url);
  } catch (err) {
    if (err) { console.error(`Error body: ${err}`); }
  }
};

export { makeRequest };
