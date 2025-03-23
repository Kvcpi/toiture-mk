import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "realisations",
  __ssrInlineRender: true,
  setup(__props) {
    const images = [
      "/realisations/1.jpeg",
      "/realisations/2.jpeg",
      "/realisations/3.jpeg",
      "/realisations/4.jpeg",
      "/realisations/5.jpeg",
      "/realisations/6.jpeg",
      "/realisations/7.jpeg",
      "/realisations/8.jpeg",
      "/realisations/9.jpeg",
      "/realisations/10.jpeg",
      "/realisations/11.jpeg",
      "/realisations/12.jpeg",
      "/realisations/13.jpeg",
      "/realisations/14.jpeg",
      "/realisations/15.jpeg",
      "/realisations/16.jpeg",
      "/realisations/17.jpeg",
      "/realisations/18.jpeg",
      "/realisations/19.jpeg",
      "/realisations/20.jpeg",
      "/realisations/21.jpeg",
      "/realisations/22.jpeg",
      "/realisations/23.jpeg",
      "/realisations/24.jpeg",
      "/realisations/25.jpeg",
      "/realisations/26.jpeg",
      "/realisations/27.jpeg",
      "/realisations/28.jpeg",
      "/realisations/29.jpeg",
      "/realisations/30.jpeg",
      "/realisations/31.jpeg",
      "/realisations/32.jpeg",
      "/realisations/33.jpeg",
      "/realisations/34.jpeg",
      "/realisations/35.jpeg",
      "/realisations/36.jpeg",
      "/realisations/37.jpg",
      "/realisations/38.jpg",
      "/realisations/39.jpg",
      "/realisations/40.jpg",
      "/realisations/41.jpg",
      "/realisations/42.jpg",
      "/realisations/43.jpg",
      "/realisations/44.jpg",
      "/realisations/45.jpg",
      "/realisations/46.jpg"
    ];
    const lightboxOpen = ref(false);
    const currentImageIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-dark-blue" }, _attrs))}><div class="max-w-7xl mx-auto px-4 py-8"><h1 class="text-4xl font-bold text-dark mb-12 text-center"> Nos réalisations </h1>`);
      if (_ctx.isLoading) {
        _push(`<div class="text-center py-8"><p class="text-white">Chargement des images...</p></div>`);
      } else if (_ctx.error) {
        _push(`<div class="text-center py-8"><p class="text-red-500">Une erreur est survenue lors du chargement des images.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(images, (image, index) => {
        _push(`<div class="group cursor-pointer"><div class="relative w-full h-40 sm:h-48 md:h-64"><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", `Réalisation ${index + 1}`)} class="w-full h-full object-cover rounded-lg" loading="lazy"></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (lightboxOpen.value) {
        _push(`<div class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center px-4 sm:px-8"><div class="relative flex items-center justify-center w-full h-full"><button class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-4xl sm:text-6xl hover:text-orange-500"> ‹ </button><img${ssrRenderAttr("src", images[currentImageIndex.value])} class="max-h-[80vh] max-w-full sm:max-w-[90vw] object-contain"><button class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-4xl sm:text-6xl hover:text-orange-500"> › </button></div><button class="absolute top-2 sm:top-4 right-2 sm:right-4 text-white text-3xl sm:text-4xl hover:text-orange-500"> × </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center justify-center"><a href="https://www.facebook.com/people/LS-Construct-Klid/100077387097074/?_rdr" target="_blank" class="inline-flex items-center justify-center px-6 py-3 text-white font-semibold bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 space-x-2 mb-6"><i class="fab fa-facebook-f text-lg"></i><span>Voir plus sur Facebook</span></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/realisations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=realisations.vue.mjs.map
