import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { Products } from './collections/Products'
import { Portfolios } from './collections/Portfolios'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { Services } from './collections/Services'
import { About } from './collections/About'
import { Footer } from './collections/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Products, Portfolios, Services, About, Footer],
  localization: {
    locales: ['en-US', 'ar-EG', 'fr', 'tr'],
    defaultLocale: 'en-US',
  },
  experimental: {
    localizeStatus: true,
  },
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
  cors: {
    origins: ['http://localhost:3000', '*'],
  },
})
