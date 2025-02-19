// server/utils/getImages.js
import fs from "fs/promises"
import path from "path"

export async function getImages() {
  try {
    const directoryPath = path.join(process.cwd(), "public/realisations")
    
    // Vérification de l'existence du dossier
    try {
      await fs.access(directoryPath)
    } catch (error) {
      console.error(`Dossier non trouvé: ${directoryPath}`)
      throw new Error("Dossier des images non trouvé")
    }

    // Lecture du dossier
    const files = await fs.readdir(directoryPath)
    
    // Filtrage et formatage des chemins d'images
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/realisations/${file}`)

    console.log(`${images.length} images trouvées:`, images)
    return images
    
  } catch (error) {
    console.error("Erreur lors de la lecture des images:", error)
    throw error
  }
}