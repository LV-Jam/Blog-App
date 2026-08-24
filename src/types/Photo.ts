import { PhotoMetadata } from "./PhotoMetadata"

interface Photo {
    title: string
    description: string
    fileSize: number
    metadata: PhotoMetadata
    category: string
}