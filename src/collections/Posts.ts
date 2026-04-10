import { CollectionConfig } from 'payload'

export const posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'titel',
      type: 'text',
    },

    {
      name: 'content',
      type: 'richText',
    },

    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
        name: 'image',
        type: 'relationship',
        relationTo: 'media',
    }
  ],
}
