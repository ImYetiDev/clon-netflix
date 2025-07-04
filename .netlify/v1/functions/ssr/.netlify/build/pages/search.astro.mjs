import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CJGhlimu.mjs';
import 'kleur/colors';
import { s as searchMovies, $ as $$Layout } from '../chunks/tmdb_Bf2ZqAFS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = Astro2.url;
  const query = url.searchParams.get("q") || "";
  console.log("\u{1F310} URL actual:", url.href);
  console.log("\u{1F50D} query param:", query);
  let results = [];
  if (query) {
    results = await searchMovies(query);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold mb-4">Resultados para: "${query}"</h1> ${results.length === 0 ? renderTemplate`<p>No se encontraron resultados.</p>` : renderTemplate`<div class="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4"> ${results.map((movie) => renderTemplate`<div class="bg-zinc-900 rounded overflow-hidden shadow"> <img${addAttribute(`https://image.tmdb.org/t/p/w500${movie.poster_path}`, "src")}${addAttribute(movie.title, "alt")} class="w-full"> <div class="p-2"> <h2 class="text-sm font-semibold truncate">${movie.title}</h2> </div> </div>`)} </div>`}` })}`;
}, "C:/dev/www/clon-netflix/src/pages/search.astro", void 0);

const $$file = "C:/dev/www/clon-netflix/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
