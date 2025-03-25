import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const _sfc_main = {
  name: "Privacy"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 text-gray-800 min-h-screen py-10" }, _attrs))} data-v-588a7b7e><div class="max-w-4xl mx-auto px-6 bg-white rounded-lg shadow-lg p-8" data-v-588a7b7e><h1 class="text-3xl font-bold mb-6 text-gray-900" data-v-588a7b7e>Politique de Confidentialité</h1><p class="mb-4" data-v-588a7b7e> Chez <strong data-v-588a7b7e>Toiture Mk</strong>, nous respectons votre vie privée et nous nous engageons à protéger les données personnelles que vous partagez avec nous. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations. </p><h2 class="text-xl font-semibold mt-6 mb-2 text-gray-800" data-v-588a7b7e>1. Informations que nous collectons</h2><p class="mb-4" data-v-588a7b7e> Nous pouvons collecter les informations suivantes : </p><ul class="list-disc pl-6 space-y-2" data-v-588a7b7e><li data-v-588a7b7e>Votre nom, adresse email, numéro de téléphone, et autres coordonnées lorsque vous nous contactez via le site.</li><li data-v-588a7b7e>Les informations concernant vos interactions avec notre site web, comme les pages visitées et le temps passé sur le site.</li><li data-v-588a7b7e>Les données techniques, telles que votre adresse IP, votre navigateur, et le système d&#39;exploitation utilisé.</li></ul><h2 class="text-xl font-semibold mt-6 mb-2 text-gray-800" data-v-588a7b7e>2. Utilisation de vos données</h2><p class="mb-4" data-v-588a7b7e> Les données collectées sont utilisées pour : </p><ul class="list-disc pl-6 space-y-2" data-v-588a7b7e><li data-v-588a7b7e>Répondre à vos demandes ou questions.</li><li data-v-588a7b7e>Améliorer notre site web et votre expérience utilisateur.</li><li data-v-588a7b7e>Respecter nos obligations légales et réglementaires.</li></ul><h2 class="text-xl font-semibold mt-6 mb-2 text-gray-800" data-v-588a7b7e>3. Partage de vos informations</h2><p class="mb-4" data-v-588a7b7e> Nous ne partageons vos informations personnelles avec des tiers que dans les cas suivants : </p><ul class="list-disc pl-6 space-y-2" data-v-588a7b7e><li data-v-588a7b7e>Lorsque cela est nécessaire pour fournir nos services (par exemple, avec des partenaires techniques).</li><li data-v-588a7b7e>Pour respecter une obligation légale ou répondre à une demande des autorités.</li></ul><h2 class="text-xl font-semibold mt-6 mb-2 text-gray-800" data-v-588a7b7e>4. Vos droits</h2><p class="mb-4" data-v-588a7b7e> Conformément à la législation sur la protection des données, vous disposez des droits suivants : </p><ul class="list-disc pl-6 space-y-2" data-v-588a7b7e><li data-v-588a7b7e>Accéder à vos données personnelles.</li><li data-v-588a7b7e>Demander la correction ou la suppression de vos données.</li><li data-v-588a7b7e>Vous opposer au traitement de vos données.</li></ul><h2 class="text-xl font-semibold mt-6 mb-2 text-gray-800" data-v-588a7b7e>5. Sécurité de vos informations</h2><p class="mb-4" data-v-588a7b7e> Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte, ou altération. </p><h2 class="text-xl font-semibold mt-6 mb-2 text-gray-800" data-v-588a7b7e>6. Contact</h2><p class="mb-4" data-v-588a7b7e> Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à : </p><p class="text-gray-600" data-v-588a7b7e><i class="fa-regular fa-paper-plane" data-v-588a7b7e></i> <a href="mailto:mk.construct2020@gmail.com" class="text-orange-500 hover:underline" data-v-588a7b7e>mk.construct2020@gmail.com</a></p><p class="text-gray-600" data-v-588a7b7e><i class="fa-solid fa-phone" data-v-588a7b7e></i> <a href="tel:+32472870080" class="text-orange-500 hover:underline" data-v-588a7b7e>0472 87 00 80</a></p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-588a7b7e"]]);

export { privacy as default };
//# sourceMappingURL=privacy.vue.mjs.map
