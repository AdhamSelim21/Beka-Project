import type { CollectionConfig } from 'payload'

export const About: CollectionConfig = {
  slug: 'about',
  admin: {
    useAsTitle: '',
  },

  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
