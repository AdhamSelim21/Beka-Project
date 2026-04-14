import type { CollectionConfig } from 'payload'

export const Padels: CollectionConfig = {
  slug: 'padels',
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