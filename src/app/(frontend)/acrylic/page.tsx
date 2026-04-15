import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import asphalt from 'images/asphalt.png'
import concrete from 'images/concrete.png'
import acrylic2 from 'images/acrylic2.png'
import acrylic1 from 'images/acrylic1.png'
import acrylic3 from 'images/acrylic3.png'
import { Media } from '@/payload-types'

export default async function AcrylicPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const acrylics = await payload.find({
    collection: 'acrylics',
    limit: 0,
  })

  const acrylicBase = [
    {
      title: 'The stadium asphalt',
      image: asphalt,
    },
    {
      title: 'The stadium concrete',
      image: concrete,
    },
  ]
  const system = [
    {
      title: 'Hard Acrylic Layer',
      image: acrylic1,
    },
    {
      title: 'Cushion Acrylic Layer',
      image: acrylic2,
    },
    {
      title: 'Soft Acrylic Layer',
      image: acrylic3,
    },
  ]

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
              ACRYLIC BASE
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {acrylicBase.map((base) => (
              <div
                className="space-y-4 bg-blue-950 rounded-xl p-6 group cursor-pointer"
                key={base.title}
              >
                <div className="aspect-[16/9] bg-surface-variant overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-all  rounded-lg "
                    src={base.image}
                    alt={base.title}
                  />
                </div>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white">
                  {base.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
              SYSTEM
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {system.map((layer) => (
              <div
                className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer"
                key={layer.title}
              >
                <div className="aspect-square w-full bg-surface-container overflow-hidden ">
                  <Image
                    className="w-full h-full object-cover rounded-lg  "
                    src={layer.image}
                    alt={layer.title}
                  />
                </div>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                  {layer.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
              PROJECTS
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          {acrylics.docs && acrylics.docs.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {acrylics.docs.map((acrylic) => (
                <div
                  className="relative aspect-[3/4] bg-surface-variant overflow-hidden"
                  key={acrylic.id}
                >
                  <Image
                    className="absolute inset-0 w-full h-full object-cover  rounded-lg  cursor-pointer"
                    src={
                      (acrylic.image as Media)?.url ||
                      'https://via.placeholder.com/400x600?text=No+Image'
                    }
                    alt="vertical shot of a boutique blue tennis court at a luxury resort"
                    fill
                  />
                </div>
              ))}
            </div>
          ) : (
            /* --- Empty State Placeholder --- */
            <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-950">No projects yet</h3>
              <p className="text-gray-500 mt-2">Check back later for new arrivals.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
