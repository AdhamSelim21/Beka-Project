import type { CollectionConfig } from 'payload'

export const ArtificialGrass: CollectionConfig = {
  slug: 'artificial-grass',
  admin: {
    useAsTitle: 'image',
  },
  
  fields: [
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    }
    
    
  ],
}