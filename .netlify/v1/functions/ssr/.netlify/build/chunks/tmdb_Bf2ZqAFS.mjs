import { e as createComponent, m as maybeRenderHead, r as renderTemplate, l as renderHead, k as renderComponent, n as renderSlot } from './astro/server_CJGhlimu.mjs';
import 'kleur/colors';
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-black border-b border-zinc-800 px-6 py-4 flex items-center justify-between"> <ul class="flex gap-6 text-sm font-semibold"> <li><a href="/" class="hover:text-red-500 transition">Inicio</a></li> <li> <a href="/tv-shows" class="hover:text-red-500 transition">TV Shows</a> </li> <li> <a href="/movies" class="hover:text-red-500 transition">Movies</a> </li> <li> <a href="/my-netflix" class="hover:text-red-500 transition">My Netflix</a> </li> </ul> <form action="/search" method="get" target="_self" class="flex items-center gap-2"> <input type="text" name="q" placeholder="Buscar..." class="bg-zinc-900 border border-zinc-700 text-sm rounded px-3 py-1"> <button type="submit" class="text-white font-semibold hover:text-red-500">
Buscar
</button> </form> </nav>`;
}, "C:/dev/www/clon-netflix/src/components/Navbar.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>Clon Netflix</title>${renderHead()}</head> <body class="bg-black text-white min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="p-4"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/dev/www/clon-netflix/src/layouts/Layout.astro", void 0);

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
console.log("🌐 API_KEY cargada:", API_KEY);
async function getPopularMovies() {
  if (!API_KEY) {
    console.error("❌ No se encontró la API key.");
    return [];
  }
  try {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`);
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("❌ Error al conectar con TMDb:", err);
    return [];
  }
}
async function searchMovies(query) {
  if (!API_KEY || !query) {
    return [];
  }
  try {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=1`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error("❌ Error al buscar películas:", res.statusText);
      return [];
    }
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("❌ Error al buscar películas:", err);
    return [];
  }
}

export { $$Layout as $, getPopularMovies as g, searchMovies as s };
