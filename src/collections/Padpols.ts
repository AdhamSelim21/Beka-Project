import type { CollectionConfig } from 'payload'

export const Padpols: CollectionConfig = {
  slug: 'padpols',
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