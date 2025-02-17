import { getImages } from "../utils/getImages";

let cachedImages = []; // Variable pour stocker les images en cache

export default defineEventHandler(() => {
  // Vérifier si le cache est vide
  if (cachedImages.length === 0) {
    console.log("Chargement des images...");
    cachedImages = getImages(); // Charger les images une seule fois
  }

  return cachedImages; // Retourner les images en cache
});
