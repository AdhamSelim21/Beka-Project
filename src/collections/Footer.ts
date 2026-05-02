import type { CollectionConfig } from 'payload'

export const Footer: CollectionConfig = {
  slug: 'footer',
  admin: {
    useAsTitle: '',
  },

  fields: [
    {
      name: 'email',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'emailAddress',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'whatsapp',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          localized:true
        },
      ],
    },
    {
        name: 'socialMedia',
        type: 'array',
        required: true,
        fields: [
            {
                name: 'instagram',
                type: 'text',
                required: true,
            },
            {
                name: 'facebook',
                type: 'text',
                required: true,
            },
            {
                name: 'tiktok',
                type: 'text',
                required: true,
            }
        ]
    }

  ],
}
