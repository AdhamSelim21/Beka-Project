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
          <Link
            href="/acrylic"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Acrylic Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src= {acrylicCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Acrylic</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Tratan Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={trtanCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Tratan</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Artificial Grass Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={artificialCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">
                Artificial-Grass
              </h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Padel Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={padelCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">padel</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Padpol Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={padpolCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">padpol</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Landscape Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={landCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Landscape</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Kids Area Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={kidsCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Kids-Area</h3>
            </div>
          </Link>

          <Link
            href="#"
            className="group cursor-pointer bg-white border border-outline rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <Image
                alt="Gym Cover"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={gymCover}
              />
            </div>
            <div className="p-8 bg-blue-950">
              <h3 className="font-headline font-black text-2xl text-white uppercase">Gym</h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
