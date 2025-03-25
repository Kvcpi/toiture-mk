import { d as defineEventHandler } from '../../_/nitro.mjs';
import fs from 'fs/promises';
import path from 'path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

async function getImages() {
  try {
    const baseDir = process.cwd();
    const possiblePaths = [
      path.join(baseDir, "public/realisations"),
      path.join(baseDir, "realisations"),
      path.join(baseDir, ".output/public/realisations"),
      path.join(baseDir, ".nuxt/public/realisations")
    ];
    console.log("Environnement:", "production");
    console.log("Dossier de base:", baseDir);
    for (const directoryPath of possiblePaths) {
      try {
        console.log("Tentative d'acc\xE8s au dossier:", directoryPath);
        await fs.access(directoryPath);
        console.log("Dossier accessible:", directoryPath);
        const files = await fs.readdir(directoryPath);
        console.log("Fichiers trouv\xE9s:", files);
        const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file)).map((file) => `/realisations/${file}`);
        console.log("Images filtr\xE9es:", imageFiles);
        if (imageFiles.length > 0) {
          return imageFiles;
        }
      } catch (error) {
        console.log(`Dossier non accessible: ${directoryPath}`);
        continue;
      }
    }
    console.warn("Aucun dossier d'images trouv\xE9 dans les chemins possibles");
    return [];
  } catch (error) {
    console.error("Erreur lors de la lecture des images:", error);
    return [];
  }
}

const images = defineEventHandler(async (event) => {
  try {
    const imagesList = await getImages();
    return {
      images: imagesList,
      success: true
    };
  } catch (error) {
    console.error("Erreur dans l'API images:", error);
    return {
      images: [],
      success: false,
      error: error.message
    };
  }
});

export { images as default };
//# sourceMappingURL=images.mjs.map
