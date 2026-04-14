import type { CollectionConfig } from 'payload'

export const LandScaps: CollectionConfig = {
  slug: 'land-scaps',
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