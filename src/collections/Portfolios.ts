import type { CollectionConfig } from 'payload'

export const Portfolios: CollectionConfig = {
  slug: 'portfolios',
  admin: {
    useAsTitle: 'description',
  },
  
  fields: [

    {
        name: 'description',
        type: 'textarea',
        required: true,
    }
    
  ],
}