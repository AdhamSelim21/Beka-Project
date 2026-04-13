import type { CollectionConfig } from 'payload'

export const Acrylics: CollectionConfig = {
  slug: 'acrylics',
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