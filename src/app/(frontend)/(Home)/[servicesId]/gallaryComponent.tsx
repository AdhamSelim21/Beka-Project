'use client'
import React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Media } from '@/payload-types'

export default function GalleryComponent({ item }: { item: any }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' })
  const gallery = item.gallery || []
  const count = gallery.length

  // 1. CAROUSEL LOGIC (More than 5 images)
  if (count > 5) {
    return (
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {gallery.map(({ image, id }: any) => {
            const { url, alt, width, height } = image as Media
            return (
              <div
                key={id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4"
              >
                <div
                  className={`space-y-4 bg-blue-950 rounded-xl group cursor-pointer ${item.hideImageText ? 'p-0' : 'p-6'}`}
                >
                  <div className="aspect-[16/9] bg-surface-variant overflow-hidden">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={url || 'https://via.placeholder.com/800x450'}
                      alt={alt || ''}
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
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // 2. DYNAMIC GRID LOGIC (1-5 images)
  const getGridStyles = () => {
    switch (count) {
      case 1:
        return 'grid grid-cols-1'
      case 2:
        return 'grid grid-cols-2'
      case 3:
        return 'grid grid-cols-3'
      case 4:
        return 'grid grid-cols-2'
      case 5:
        return 'flex flex-wrap justify-center'
      default:
        return 'grid grid-cols-1'
    }
  }

  return (
    <div className={`${getGridStyles()} gap-8`}>
      {gallery.map(({ image, id }: any, index: number) => {
        const { url, alt, width, height } = image as Media

        const itemWidthClass =
          count === 5
            ? index < 3
              ? 'w-full md:w-[calc(33.33%-1.5rem)]'
              : 'w-full md:w-[calc(50%-1.5rem)]'
            : 'w-full'

        return (
          <div
            key={id}
            className={`${itemWidthClass} space-y-4 bg-blue-950 rounded-xl group cursor-pointer ${item.hideImageText ? 'p-0' : 'p-6'}`}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-lg"
                src={url || 'https://via.placeholder.com/800x450'}
                alt={alt || ''}
                width={width || 800}
                height={height || 450}
              />
            </div>
            {!item.hideImageText && (
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-orange-500 transition-colors">
                {alt}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
