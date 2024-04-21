export const URL_API = "https://api.themoviedb.org/3";

export const TOKEN_API =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjM0NzAzNmZjNmRlOGVhY2VkNjRhMWNhNmY5ZDFiNyIsInN1YiI6IjY2MGNhNGEyZTAzOWYxMDE2MmU1NjdlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qNC1UUz3oINdPFX68Ms15jjdHfCrDoKB7c-n4fiHmiM";

export const URL_IMAGES = "https://image.tmdb.org/t/p/w500/";

export const URL_POSTER = "https://image.tmdb.org/t/p/original";

export const URL_DETAILS = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?language=es-ES`;

export const URL_VIDEOS = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos`;

export const URL_NOW_PLAYING = (page) =>
  `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`;

export const URL_POPULAR = (page) =>
  `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`;

export const URL_SEARCH = (searchValue) =>
  `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
