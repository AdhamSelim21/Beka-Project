import { getPayload } from 'payload'
import config from '@/payload.config'
import { Media } from '@/payload-types'
import Image from 'next/image'
import asphalt from 'images/asphalt.png'
import concrete from 'images/concrete.png'
import tartan4 from 'images/tartan4.png'
import tartan2 from 'images/tartan2.png'
import tartan5 from 'images/tartan5.png'
import tartan3 from 'images/tartan3.png'
import tartan1 from 'images/tartan1.png'
import { T } from 'node_modules/vitest/dist/chunks/traces.d.402V_yFI'

export default async function TartanPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const trtans = await payload.find({
    collection: 'trtans',
    limit: 0,
  })
  const tartanBase = [
    {
      name: 'The stadium asphalt',
      image: asphalt,
    },
    {
      name: 'The stadium concrete',
      image: concrete,
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
  ]
  const lastSystem = [
    {
      title: 'Tartan Sandwitch Layer',
      image: tartan4,
    },
    {
      title: 'Tartan MM Layer',
      image: tartan5,
    },
  ]

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
              TARTAN BASE
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tartanBase.map((item) => (
              <div
                className="space-y-4 bg-blue-950 rounded-xl p-6 group cursor-pointer"
                key={item.name}
              >
                <div className="aspect-[16/9] bg-surface-variant overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-all  rounded-lg  cursor-pointer"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white">
                  {item.name}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
            {system.map((item) => (
              <div
                className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer"
                key={item.name}
              >
                <div className="aspect-square w-full bg-surface-container overflow-hidden ">
                  <Image
                    className="w-full h-full object-cover rounded-lg  cursor-pointer "
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                  {item.name}
                </p>
              </div>
            ))}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              {lastSystem.map((item) => (
                <div
                  className="flex flex-col items-center text-center space-y-6 bg-blue-950 rounded-xl p-6 group cursor-pointer"
                  key={item.title}
                >
                  <div className="aspect-square w-full bg-surface-container overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-lg  cursor-pointer"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <p className="text-sm font-bold tracking-[0.2em] uppercase text-secondary text-white">
                    {item.title}
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
               {trtans.docs && trtans.docs.length > 0 ? (
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {trtans.docs.map((trtan) => (
                     <div
                       className="relative aspect-[3/4] bg-surface-variant overflow-hidden"
                       key={trtan.id}
                     >
                       <Image
                         className="absolute inset-0 w-full h-full object-cover  rounded-lg  cursor-pointer"
                         src={
                           (trtan.image as Media)?.url ||
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
