import fs from "fs/promises";
import path from "path";

export async function getImages() {
  try {
    // Utiliser le chemin absolu pour le dossier public
    const baseDir = process.cwd();
    const directoryPath = path.join(baseDir, "public/realisations");
    console.log('Chemin du dossier:', directoryPath);
    console.log('NODE_ENV:', process.env.NODE_ENV);

    try {
      await fs.access(directoryPath);
      console.log('Le dossier est accessible');
    } catch (error) {
      console.error(`Dossier non trouvé: ${directoryPath}`);
      // Essayer un chemin alternatif pour Vercel
      const altPath = path.join(baseDir, "realisations");
      try {
        await fs.access(altPath);
        console.log('Dossier trouvé avec le chemin alternatif:', altPath);
        const files = await fs.readdir(altPath);
        console.log('Fichiers trouvés (chemin alternatif):', files);
        return files
          .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .map(file => `/realisations/${file}`);
      } catch (altError) {
        console.error('Chemin alternatif également non trouvé:', altError);
        return [];
      }
    }

    const files = await fs.readdir(directoryPath);
    console.log('Fichiers trouvés:', files);

    const imageFiles = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/realisations/${file}`);

    console.log('Images filtrées:', imageFiles);
    return imageFiles;

  } catch (error) {
    console.error("Erreur lors de la lecture des images:", error);
    return [];
  }
}