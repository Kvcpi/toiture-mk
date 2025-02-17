import fs from "fs";
import path from "path";

/**
 * Fonction pour récupérer la liste des images dans le dossier /public/realisations
 */
export function getImages() {
  const directoryPath = path.join(process.cwd(), "public/realisations");

  try {
    // Lire tous les fichiers du dossier
    const files = fs.readdirSync(directoryPath);

    // Filtrer uniquement les fichiers image
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/realisations/${file}`); // Retourner le chemin des images
  } catch (error) {
    console.error("Erreur lors de la lecture des images:", error);
    return [];
  }
}
