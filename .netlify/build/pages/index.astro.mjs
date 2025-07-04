import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CJGhlimu.mjs';
import 'kleur/colors';
import { g as getPopularMovies, $ as $$Layout } from '../chunks/tmdb_Bf2ZqAFS.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const movies = await getPopularMovies();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Películas Populares</h1> ${movies.length === 0 ? renderTemplate`<p>No se pudieron cargar las películas. Revisa la consola.</p>` : renderTemplate`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;"> ${movies.map((movie) => renderTemplate`<div style="background: #111; color: white; padding: 1rem; border-radius: 8px;"> <img${addAttribute(`https://image.tmdb.org/t/p/w500${movie.poster_path}`, "src")}${addAttribute(movie.title, "alt")} style="width: 100%; border-radius: 4px;"> <h2 style="font-size: 1.2rem; margin-top: 0.5rem;"> ${movie.title} </h2> <p style="font-size: 0.9rem;"> ${movie.overview.slice(0, 100)}...
</p> </div>`)} </div>`}` })}`;
}, "C:/dev/www/clon-netflix/src/pages/index.astro", void 0);

const $$file = "C:/dev/www/clon-netflix/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
