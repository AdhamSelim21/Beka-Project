import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: '',
  },
  
  fields: [
    {
        name: 'title',
        type: 'text',
        required: true,
    },
    {
        name: 'image',
        type: 'upload',
        relationTo: 'media',
    },
    {
        name: 'sections',
        type: 'array',
        required: true,
        minRows: 2,
        maxRows: 3,
        fields: [
            {
                name: 'title',
                type: 'text',
                required: true,
            },
            {
                name: 'gallery',
                type: 'array',
                minRows:2,
                required: true,
                fields: [
                    {
                        name: 'image',
                        type: 'upload',
                        relationTo: 'media',
                        required: true,
                    }
                ]
            },
            {
                name: 'hideImageText',
                type: 'checkbox',
                defaultValue: false,

            }
        ]
    }

    
    
    
  ],
}