import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTYyOWQ1MTNiY2M3N2MwZWM1ZTIyOWI1YzRkZmJjMiIsInN1YiI6IjY2NjU5Nzc5ZmNhZjYwOGU4ODc4ZTIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6fROBUVgOLgBQGjA7_N-Jc1SerWXjIFDHR0AOV7md9Q";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const DEFAULT_IMAGE =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

const axiosInit = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export { axiosInit, IMAGE_BASE_URL, DEFAULT_IMAGE };
