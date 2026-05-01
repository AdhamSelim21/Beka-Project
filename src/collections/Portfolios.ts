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
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      localized: true,
    },
 
  ],
}
