import { getPayload } from 'payload'
import config from '@/payload.config'
import { Media } from '@/payload-types'

export default async function ProuductsPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const products = await payload.find({
    collection: 'products',
  })
  console.log('Products:', products)

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {products.docs.map((product) => (
          <div className="flex flex-col md:flex-row items-center gap-16 group rounded-lg p-8 border-solid border-3 border-blue-950">
            <div className="flex-1 space-y-6">
              <h2 className="font-headline font-extrabold text-5xl tracking-tighter text-on-surface text-blue-950">
                {product.title}
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md border-l-4 border-orange-500 pl-6">
                {product.description}
              </p>
            </div>
            <div className="flex-1 w-full aspect-[16/9] bg-surface-container rounded-lg overflow-hidden editorial-shadow transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                alt="Basketball Gear"
                className="w-full h-full object-cover"
                data-alt="vibrant orange textured basketball resting on a polished hardwood court with bright stadium lighting overhead"
                src={(product.image as Media)?.url || 'https://via.placeholder.com/800x450?text=No+Image+Available'}
              />
            </div>
          </div>
        ))}

        {/* <div className="flex flex-col md:flex-row items-center gap-16 group rounded-lg p-8 border-solid border-3 border-blue-950">
          <div className="flex-1 space-y-6">
            <h2 className="font-headline font-extrabold text-5xl tracking-tighter text-on-surface text-blue-950">
              AERO-STRIKE RACKETS
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md border-l-4 border-orange-500 pl-6">
              Carbon-fiber frames with optimized string tension for explosive power. Master the
              court with the most responsive racket in the industry.
            </p>
          </div>
          <div className="flex-1 w-full aspect-[16/9] bg-surface-container rounded-lg overflow-hidden editorial-shadow transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              alt="Tennis Racket"
              className="w-full h-full object-cover"
              data-alt="close up of a professional tennis racket and vibrant yellow balls on a bright blue hard court in sunlight"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAszdPJh7JGGzF6gjOd3EYW9O7dWZ7lpfVZuNt3BlSZT1Rv-0oue4KxQ8DuedrMb0dnzcDYIjDrrzTmde7LW_m7QQ4hazABCYUvSU0YSX5cC2KAE9_m0UYrhdeqWZgP64daEeWwnVI8n5VJTPeESjvb_XON7KB9b3QBcKZEDJoNs3H3M02WHUYs-3vyKsY-PSlhRrKsgAKWMzhyD57wrRhcaULGl2K2cfL8tb9RbHhJ71CS8jMu-qPzk_-GxVA_KwKyJWfHr-xY6a1t"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 group rounded-lg p-8 border-solid border-3 border-blue-950">
          <div className="flex-1 space-y-6">
            <h2 className="font-headline font-extrabold text-5xl tracking-tighter text-on-surface text-blue-950">
              TURF-KING FOOTWEAR
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md border-l-4 border-orange-500 pl-6">
              Unrivaled traction on every surface. Our lightweight design ensures maximum agility
              during high-stakes maneuvers.
            </p>
          </div>
          <div className="flex-1 w-full aspect-[16/9] bg-surface-container rounded-lg overflow-hidden editorial-shadow transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              alt="Soccer Boots"
              className="w-full h-full object-cover"
              data-alt="modern vibrant soccer cleats with neon accents sitting on lush green grass with water droplets in bright morning sun"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7s-fMZi_ATTBBAVvfKGS77ceamJMvPAAlReS6opiGUpO4D93fypRAhkFzB9G90843Lf5x3Gt0NjXq9CUfuG7vcnoIYSHsUckIoAJQnAbEZNBY7uzaN5mbWtG7LD8P8QVulp4hRWRn08ksVM3jioYNbeEjtHvG2RN-giRiUEe2HseAsM1Aagbuz0tlcZJ4SWyANYCfyDaPRssFYCV3q1Q6-1-TSusfZCVMJKlrPIl25XtW6WqL2TztnrRq3XvBvMMlsWcntHuTWMJ1"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 group rounded-lg p-8 border-solid border-3 border-blue-950  ">
          <div className="flex-1 space-y-6">
            <h2 className="font-headline font-extrabold text-5xl tracking-tighter text-on-surface text-blue-950">
              HYDRO-FLOW THERAPY
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md border-l-4 border-orange-500 pl-6">
              The future of athlete recovery. Integrated hydration and temperature-regulated
              compression to keep you in peak performance state.
            </p>
          </div>
          <div className="flex-1 w-full aspect-[16/9] bg-surface-container rounded-lg overflow-hidden editorial-shadow transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              alt="Recovery Gear"
              className="w-full h-full object-cover"
              data-alt="athlete using a sleek modern percussion massage device in a sunlit high-end fitness studio"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACxB0DoijnAPIHL6IB_h3QeZwlbKXV5JrKLqSPjfepZerFZP9bKXCShbts116oezqDM3T3QHA-VV8FA_OBl-s194CTUGKUETKCP2l433ZFePfnUH7qS1lxWtVz73T0Ec1k6n2a9BJbcrxPhAl65-3WJxFRyQju_Yxiwpy38M24QBq1pxaBcQ-QPhubYVXi6WhMdJ5eQDrWBsFA1bi_FuvBa8qjcXC0EmsggunTFGrJrXHsaVxxKj2l7E2r-Updz6y_8dLexE5QjMy0"
            />
          </div>
        </div> */}
      </section>
    </div>
  )
}
