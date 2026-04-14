import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import asphalt from 'images/asphalt.png'
import concrete from 'images/concrete.png'
import tartan4 from 'images/tartan4.png'
import tartan2 from 'images/tartan2.png'
import tartan3 from 'images/tartan3.png'
import tartan1 from 'images/tartan1.png'
import { Media } from '@/payload-types'

export default async function LandScapePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const landScaps = await payload.find({
    collection: 'land-scaps',
  })

  const landScapeBase = [
    {
      name: 'The stadium asphalt',
      image: asphalt,
    },
    {
      name: 'The stadium concrete',
      image: concrete,
    },
    {
      name: 'Tartan SW Layer',
      image: tartan1,
    },
  ]
  const system = [
    {
      name: 'Tartan SW Layer',
      image: tartan1,
    },
    {
      name: 'Tartan M Layer',
      image: tartan2,
    },
    {
      name: 'Tartan MW Layer',
      image: tartan3,
    },
    {
      name: 'Tartan Sandwitch Layer',
      image: tartan4,
    },
  ]

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
                Core Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8">
              {landScapeBase.map((item) => (
                <div
                  className="flex flex-col bg-blue-950 rounded-2xl overflow-hidden cursor-pointer space-y-4 "
                  key={item.name}
                >
                  <div className="aspect-[3/4] bg-surface-variant overflow-hidden rounded-2xl mb-0">
                    <Image
                      className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="bg-surface-container py-3 rounded-b-2xl">
                    <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white text-center ">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
                Technical Excellence
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {system.map((item) => (
                <div
                  className="space-y-4 bg-blue-950 rounded-xl p-6 group cursor-pointer"
                  key={item.name}
                >
                  <div className="aspect-[16/9] bg-surface-variant overflow-hidden">
                    <Image
                      className="w-full h-full object-cover transition-all duration-700 rounded-lg group-hover:scale-105"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
              PROJECTS
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          {landScaps.docs && landScaps.docs.length > 0 ? (
            landScaps.docs.map((landScape) => (
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4" key={landScape.id}>
                <div className="relative aspect-[3/4] bg-surface-variant overflow-hidden">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-lg group-hover:scale-105"
                    src={
                      (landScape.image as Media)?.url ||
                      'https://via.placeholder.com/400x600?text=No+Image'
                    }
                    alt="vertical shot of a boutique blue tennis court at a luxury resort"
                    fill
                  />
                </div>
              </div>
            ))
          ) : (
            /* --- Empty State Placeholder --- */
            <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-xl  ">
              <h3 className="text-2xl font-bold text-blue-950">No projects yet</h3>
              <p className="text-gray-500 mt-2">Check back later for new arrivals.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
