import type { CollectionConfig } from 'payload'

export const Trtans: CollectionConfig = {
  slug: 'trtans',
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