import axios from 'axios'; 

const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=345007f9ab440e5b86cef51be6397df1';
 

export async function fetchData(page=1) {
  
    const response = await axios.get(`${BASE_URL}&page=${page}`);
    return response;
  }

  export async function fetchTrailer(id) {
    const BASE_URL_TRAILER = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=345007f9ab440e5b86cef51be6397df1`;
    const response = await axios.get(`${BASE_URL_TRAILER}`);
    return response;
  }