// server/api/images.js
import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
  try {
    // Chemin du dossier des réalisations
    const baseDir = process.cwd()
    const imagesDir = path.join(baseDir, 'public/realisations')
    
    // Vérifier si le dossier existe
    try {
      await fs.access(imagesDir)
    } catch (error) {
      console.error('Dossier non trouvé:', imagesDir)
      return { images: [] }
    }

    // Lire les fichiers du dossier
    const files = await fs.readdir(imagesDir)
    
    // Filtrer les images
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/realisations/${file}`)

    return { images }
  } catch (error) {
    console.error('Erreur lors de la lecture des images:', error)
    return { images: [] }
  }
})