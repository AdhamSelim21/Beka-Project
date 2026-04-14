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
import { Acrylics } from './collections/Acrylics'
import { Trtans } from './collections/Trtans'
import { Padels } from './collections/Padels'
import { ArtificialGrass } from './collections/artificialGrass'
import { Padpols } from './collections/Padpols'
import { Gyms } from './collections/Gyms'
import { KidsAreas } from './collections/kidsAreas'
import { LandScaps } from './collections/landScaps'



// import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Products, Portfolios, Acrylics, Trtans, Padels, ArtificialGrass, Padpols, KidsAreas, Gyms, LandScaps],
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
    // uploadthingStorage({
    //   collections: {
    //     media: true,
    //   },
    //   options: {
    //     token: process.env.UPLOADTHING_TOKEN,
    //     acl: 'public-read',
    //   },
    // }),
  ],
  cors: {
    origins: ['http://localhost:3000', '*'],
  }
})
