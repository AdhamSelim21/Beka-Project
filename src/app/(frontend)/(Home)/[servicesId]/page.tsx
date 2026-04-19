import { getPayload } from 'payload'
import config from '@/payload.config'
import GalleryComponent from './gallaryComponent'

export default async function ServicePage({ params }: { params: { servicesId: string } }) {
  const { servicesId } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const service = await payload.find({
    collection: 'services',
    where: {
      id: {
        equals: servicesId,
      },
    },
  })

  const selectedService = service.docs[0] // Get the first service object, not the array
  console.log(selectedService) // Log the selected service to verify its structure
 

  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {selectedService.sections.map((item) => (
          <section key={item.id}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-blue-950 border-b-orange-500 border-b-6 inline-block pb-2">
                {item.title}
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto"></div>
            </div>

            <GalleryComponent item={item} />
          </section>
        ))}
      </main>
    </div>
  )
}
