import type { CollectionConfig } from 'payload'

export const Gyms: CollectionConfig = {
  slug: 'gyms',
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