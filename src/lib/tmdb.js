const API_KEY  = import.meta.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

function safeFetch(url) {
  return fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch((err) => {
      console.error('❌ TMDb error:', err);
      return { results: [] };
    });
}

/* ----------  PELÍCULAS  ---------- */
export const getPopularMovies = async () =>
  (await safeFetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`)).results;

/* ----------  SERIES (TV SHOWS)  ---------- */
export const getPopularTVShows = async () =>
  (await safeFetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-ES&page=1`)).results;

/* ----------  BÚSQUEDA  ---------- */
export const searchAll = async (query) => {
  if (!query) return [];
  // combinamos películas y series (dos peticiones en paralelo)
  const [movies, shows] = await Promise.all([
    safeFetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=1`),
    safeFetch(`${BASE_URL}/search/tv?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=1`)
  ]);
  return [...movies.results, ...shows.results];
};

/* ----------  TENDENCIAS DE LA SEMANA (hero principal)  ---------- */
export const getTrending = async () =>
  (await safeFetch(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=es-ES`)).results;

/* ----------  POR GÉNERO (para las filas pequeñas)  ---------- */
export const getMoviesByGenre = async (genreId) =>
  (await safeFetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreId}&sort_by=popularity.desc&page=1`)).results;
