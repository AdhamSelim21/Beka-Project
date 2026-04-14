import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'
import acrylicCover from 'images/acrylicCover.png'
import trtanCover from 'images/trtanCover.png'
import artificialCover from 'images/artificialCover.png'
import padelCover from 'images/padelCover.png'
import padpolCover from 'images/padpolCover.png'
import landCover from 'images/landCover.png'
import kidsCover from 'images/kidsCover.png'
import gymCover from 'images/gymCover.png'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const sportsPlayGround = [
    {
      title: 'Acrylic',
      image: acrylicCover,
      href: '/acrylic',
    },

    {
      title: 'Tartan',
      image: trtanCover,
      href: '/trtan',
    },
    {
      title: 'Artificial-Grass',
      image: artificialCover,
      href: '/artificial-grass',
    },
    {
      title: 'padel',
      image: padelCover,
      href: '/padel',
    },
    {
      title: 'padpol',
      image: padpolCover,
      href: '/padpol',
    },
    {
      title: 'Landscape',
      image: landCover,
      href: '/land-scape',
    },
    {
      title: 'Kids-Area',
      image: kidsCover,
      href: '/kids-area',
    },
    {
      title: 'Gym',
      image: gymCover,
      href: '/gym',
    },
  ]

  return (
    <div>
      <section className="max-w-7xl mx-auto py-24 px-8">
        <div className="mb-16 text-center">
          <h2 className="font-headline font-black text-4xl md:text-5xl text-blue-950 uppercase tracking-tight">
            Sports Playgrounds
          </h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sportsPlayGround.map((item) => (
            <Link
              href={item.href}
              className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              key={item.title}
            >
              <div className="aspect-[16/10] w-full overflow-hidden" key={item.title}>
                <Image
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
              </div>
              <div className="p-8 bg-blue-950">
                <h3 className="font-headline font-black text-2xl text-white uppercase">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
