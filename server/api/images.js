// server/api/images.js
import { getImages } from "../utils/getImages"

export default defineEventHandler(async (event) => {
  try {
    const imagesList = await getImages()
    return {
      images: imagesList,
      success: true
    }
  } catch (error) {
    console.error("Erreur dans l'API images:", error)
    return {
      images: [],
      success: false,
      error: error.message
    }
  }
})