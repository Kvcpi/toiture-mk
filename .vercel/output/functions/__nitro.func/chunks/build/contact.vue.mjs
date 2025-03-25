import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const message = ref("");
    const status = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white py-12"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h1 class="text-4xl font-bold text-orange-500">Contact</h1></div></div><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12"><div><h2 class="text-2xl font-bold mb-6">Nos coordonnées</h2><div class="space-y-4"><div><h3 class="font-semibold text-lg">Adresse</h3><p><i class="fa-solid fa-location-dot"></i><a href="https://www.google.com/maps?q=Excelsiorlaan+71,+1930+Zaventem" target="_blank" class="hover:text-orange-500 transition-all duration-300"> Excelsiorlaan 71, 1930 Zaventem </a></p></div><div><h3 class="font-semibold text-lg">Téléphone</h3><p><i class="fa-solid fa-phone"></i> <a href="tel:+32472870080" class="hover:text-orange-500 transition-all duration-300">0472 87 00 80</a></p></div><div><h3 class="font-semibold text-lg">Email</h3><p><i class="fa-regular fa-paper-plane"></i> <a href="mailto:mk.construct2020@gmail.com" class="hover:text-orange-500 transition-all duration-300">mk.construct2020@gmail.com</a></p></div></div></div><form class="space-y-6"><div><label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label><input type="text" id="name" name="name"${ssrRenderAttr("value", name.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required></div><div><label for="email" class="block text-sm font-medium text-gray-700">Email</label><input type="email" id="email" name="email"${ssrRenderAttr("value", email.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required></div><div><label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label><input type="tel" id="phone" name="phone"${ssrRenderAttr("value", phone.value)} class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required></div><div><label for="message" class="block text-sm font-medium text-gray-700">Message</label><textarea id="message" name="message" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md" required>${ssrInterpolate(message.value)}</textarea></div><button type="submit" class="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"> Envoyer </button>`);
      if (status.value === "success") {
        _push(`<div class="mt-6 text-green-500"><p>Merci ! Votre message a bien été envoyé. Nous vous répondrons au plus vite. <i class="fa-solid fa-check"></i></p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (status.value === "error") {
        _push(`<div class="mt-6 text-red-500"><p>Une erreur est survenue. Veuillez réessayer. <i class="fa-solid fa-xmark"></i></p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact.vue.mjs.map
