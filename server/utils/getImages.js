import fs from "fs/promises";
import path from "path";

export async function getImages() {
  try {
    // Utiliser le chemin absolu pour le dossier public
    const baseDir = process.cwd();
    const possiblePaths = [
      path.join(baseDir, "public/realisations"),
      path.join(baseDir, "realisations"),
      path.join(baseDir, ".output/public/realisations"),
      path.join(baseDir, ".nuxt/public/realisations")
    ];

    console.log('Environnement:', process.env.NODE_ENV);
    console.log('Dossier de base:', baseDir);

    for (const directoryPath of possiblePaths) {
      try {
        console.log('Tentative d\'accès au dossier:', directoryPath);
        await fs.access(directoryPath);
        console.log('Dossier accessible:', directoryPath);
        
        const files = await fs.readdir(directoryPath);
        console.log('Fichiers trouvés:', files);

        const imageFiles = files
          .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
          .map(file => `/realisations/${file}`);

        console.log('Images filtrées:', imageFiles);
        
        if (imageFiles.length > 0) {
          return imageFiles;
        }
      } catch (error) {
        console.log(`Dossier non accessible: ${directoryPath}`);
        continue;
      }
    }

    console.warn('Aucun dossier d\'images trouvé dans les chemins possibles');
    return [];

  } catch (error) {
    console.error("Erreur lors de la lecture des images:", error);
    return [];
  }
}