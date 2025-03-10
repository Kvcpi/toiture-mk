import fs from "fs/promises";
import path from "path";

export async function getImages() {
  try {
    // Utiliser le chemin absolu pour le dossier public
    const baseDir = process.cwd();
    const directoryPath = path.join(baseDir, "public/realisations");
    console.log('Chemin du dossier:', directoryPath);

    try {
      await fs.access(directoryPath);
    } catch (error) {
      console.error(`Dossier non trouvé: ${directoryPath}`);
      return [];
    }

    const files = await fs.readdir(directoryPath);
    console.log('Fichiers trouvés:', files);

    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/realisations/${file}`);

  } catch (error) {
    console.error("Erreur lors de la lecture des images:", error);
    return [];
  }
}