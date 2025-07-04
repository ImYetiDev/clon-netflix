// src/lib/tmdb.js

const API_KEY = import.meta.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

console.log('🌐 API_KEY cargada:', API_KEY);

export async function getPopularMovies() {
  if (!API_KEY) {
    console.error('❌ No se encontró la API key.');
    return [];
  }

  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error('❌ Error al conectar con TMDb:', err);
    return [];
  }
}

export async function searchMovies(query) {
  if (!API_KEY || !query) {
    return [];
  }

  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=1`;
    const res = await fetch(url);

    if (!res.ok) {
      console.error('❌ Error al buscar películas:', res.statusText);
      return [];
    }

    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error('❌ Error al buscar películas:', err);
    return [];
  }
}
