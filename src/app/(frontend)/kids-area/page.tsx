import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import { Media } from '@/payload-types'
import padel1 from 'images/padel1.png'
import padel2 from 'images/padel2.png'
import padel3 from 'images/padel3.png'

export default async function PadelPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const kidsAreas = await payload.find({
    collection: 'kids-areas',
  })

  return (
    <div>
      <section className="max-w-7xl mx-auto px-8 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-blue-950 mb-16 border-b-orange-500 border-b-6 inline-block pb-2 uppercase">
          PADEL BASE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col bg-blue-950 rounded-2xl overflow-hidden cursor-pointer space-y-4 ">
            <div className="aspect-[3/4] bg-surface-variant overflow-hidden rounded-2xl mb-0">
              <Image
                className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105"
                src={padel1}
                alt="vibrant color close-up of a high-end carbon fiber padel racket with orange accents"
              />
            </div>
            <div className="bg-surface-container py-3 rounded-b-2xl">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white ">
                The stadium iron
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-blue-950 rounded-2xl overflow-hidden cursor-pointer space-y-4">
            <div className="aspect-[3/4] bg-surface-variant overflow-hidden rounded-2xl mb-0">
              <Image
                className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105"
                src={padel2}
                alt="bright neon yellow padel balls on a vibrant blue court surface"
              />
            </div>
            <div className="bg-surface-container py-3 rounded-b-2xl">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white">
                The stadium concrete
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-blue-950 rounded-2xl overflow-hidden cursor-pointer space-y-4">
            <div className="aspect-[3/4] bg-surface-container-highest overflow-hidden rounded-2xl mb-0">
              <Image
                className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105"
                src={padel3}
                alt="dynamic full color photo of a padel player hitting a smash on court"
              />
            </div>
            <div className="bg-surface-container py-3 rounded-b-2xl">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white">
                The stadium glass
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-headline font-black tracking-tighter uppercase text-blue-950  border-b-orange-500  border-b-6 inline-block pb-2">
            PROJECTS
          </h2>
        </div>
        {kidsAreas.docs && kidsAreas.docs.length > 0 ? (
          kidsAreas.docs.map((kidsArea) => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" key={kidsArea.id}>
              <div className="aspect-[16/9] bg-surface-container-highest rounded-[2.5rem] overflow-hidden cursor-pointer">
                <Image
                  className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105"
                  src={
                    (kidsArea.image as Media).url ||
                    'https://via.placeholder.com/400x600?text=No+Image'
                  }
                  alt="vibrant architectural photo of a modern corporate building with blue glass windows"
                />
              </div>
            </div>
          ))
        ) : (
          /* --- Empty State Placeholder --- */
          <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-950">No projects yet</h3>
            <p className="text-gray-500 mt-2">Check back later for new arrivals.</p>
          </div>
        )}
      </section>
    </div>
  )
}
