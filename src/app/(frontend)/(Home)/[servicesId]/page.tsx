import { getPayload } from 'payload'
import config from '@/payload.config'
import Image from 'next/image'
import { Media } from '@/payload-types'

export default async function ServicePage({ params }: { params: { servicesId: string } }) {
  const { servicesId } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const service = await payload.find({
    collection: 'services',
    limit: 0,
    where: {
      id: {
        equals: servicesId,
      },
    },
  })
  const selectedService = service.docs[0]
  console.log(selectedService)

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {selectedService.sections.map((item) => (
          <section key={item.id}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500  border-b-6 inline-block pb-2">
                {item.title}
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {item.gallery.map(({ image, id }) => {
                const { url, alt , width , height } = image as Media
                return (
                  <div
                    className={`space-y-4 bg-blue-950 rounded-xl group cursor-pointer ${item.hideImageText ? 'p-0' : 'p-6'}`}
                    key={id}
                  >
                    <div className="aspect-[16/9] bg-surface-variant overflow-hidden">
                      <Image
                        className="w-full h-full object-cover transition-all  rounded-lg "
                        src={url || 'https://via.placeholder.com/800x450?text=No+Image'}
                        alt={alt}
                        width={width || 800}
                        height={height || 450}
                      />
                    </div>
                    {!item.hideImageText && (
                      <p className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors text-white">
                        {alt}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

       

        
      </main>
    </div>
  )
}
