import type { CollectionConfig } from 'payload'

export const KidsAreas: CollectionConfig = {
  slug: 'kids-areas',
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