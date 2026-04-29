'use client'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Media } from '@/payload-types'
import { useCallback, useEffect, useState } from 'react'

export default function GalleryComponent({ item }: { item: any }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: true,
    containScroll: 'trimSnaps',
    breakpoints: {
      '(min-width: 768px)': { align: 'center' },
      '(min-width: 1024px)': { align: 'start' },
    },
  })
  const [currentIndex, setCurrentIndex] = useState(1)
  const gallery = item.gallery || []
  const count = gallery.length

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const updateCurrentIndex = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap() + 1)
    }
    updateCurrentIndex()
    emblaApi.on('select', updateCurrentIndex)
    return () => {
      emblaApi.off('select', updateCurrentIndex)
    }
  }, [emblaApi])

  // 1. CAROUSEL LOGIC (More than 5 images)
  if (count > 5) {
    return (
      <div className="relative group rounded-2xl md:rounded-3xl border border-white/10 bg-blue-950 p-2 md:p-4 lg:p-6 shadow-2xl shadow-slate-950/40">
        <div className="embla overflow-hidden rounded-2xl md:rounded-3xl" ref={emblaRef}>
          <div className="flex -ml-1 md:-ml-2 lg:-ml-4">
            {gallery.map(({ image, id }: any, index: number) => {
              const { url, alt } = image as Media
              return (
                <div
                  key={id}
                  className="flex-shrink-0 min-w-[85%] md:min-w-[50%] lg:min-w-[33.33%] pl-4 md:pl-2 lg:pl-4"
                >
                  <div
                    className={`space-y-0 md:space-y-2 lg:space-y-4 rounded-lg md:rounded-xl lg:rounded-3xl border-0 md:border md:border-white/10 bg-transparent md:bg-slate-950/50 p-0 md:p-3 lg:p-6 transition-transform duration-500 hover:-translate-y-1 ${item.hideImageText ? 'p-0' : ''}`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-md md:rounded-lg lg:rounded-3xl bg-slate-800">
                      <Image
                        src={url || 'https://via.placeholder.com/800x450'}
                        alt={alt || ''}
                        fill
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        priority={index < 3}
                      />
                    </div>
                    {!item.hideImageText && (
                      <p className="text-[10px] md:text-xs lg:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-slate-200 line-clamp-1">
                        {alt || 'Untitled Image'}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-3 md:mt-4 flex justify-center">
          <div className="rounded-full bg-slate-950/90 px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-slate-100 shadow-lg border border-white/5">
            {currentIndex} / {count}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0.5 md:left-2 lg:left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-slate-800/80 p-1.5 md:p-2 lg:p-3 text-xs md:text-sm lg:text-base font-semibold text-white shadow-lg transition hover:bg-slate-700"
          aria-label="Previous"
        >
          ‹
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-0.5 md:right-2 lg:right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-slate-800/80 p-1.5 md:p-2 lg:p-3 text-xs md:text-sm lg:text-base font-semibold text-white shadow-lg transition hover:bg-slate-700"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    )
  }

  // 2. DYNAMIC GRID LOGIC (1-5 images)
  const getGridStyles = () => {
  switch (count) {
    case 1: return 'grid grid-cols-1'
    case 2: return 'grid grid-cols-1 md:grid-cols-2'
    case 3: return 'grid grid-cols-1 md:grid-cols-3'
    case 4: return 'grid grid-cols-1 md:grid-cols-2'
    case 5: return 'flex flex-wrap justify-center'
    default: return 'grid grid-cols-1'
  }
}

return (
  <div className={`${getGridStyles()} gap-4 md:gap-8`}>
    {gallery.map(({ image, id }: any, index: number) => {
      const { url, alt, width, height } = image as Media

      // 1. Determine Orientation Class
      // If height is greater than width, it's portrait.
      const isPortrait = height && width && height > width;
      const aspectClass = isPortrait ? 'aspect-[3/4]' : 'aspect-[16/9]';

      const itemWidthClass =
        count === 5
          ? index < 3
            ? 'w-full md:w-[calc(33.33%-1.5rem)]'
            : 'w-full md:w-[calc(50%-1.5rem)]'
          : 'w-full'

      return (
        <div
          key={id}
          className={`${itemWidthClass} group rounded-2xl md:rounded-3xl border border-white/10 bg-blue-950 transition duration-300 hover:-translate-y-1 ${item.hideImageText ? 'p-0' : 'p-4 md:p-6'}`}
        >
          {/* 2. Apply the dynamic aspectClass here */}
          <div className={`relative ${aspectClass} overflow-hidden rounded-xl md:rounded-3xl bg-slate-900 `}>
            <Image
              src={url || 'https://via.placeholder.com/800x450'}
              alt={alt || ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 item-stretch"
            />
          </div>
          
          {!item.hideImageText && (
            <p className="mt-3 md:mt-4 text-sm md:text-lg font-semibold tracking-widest text-slate-100 text-center uppercase group-hover:text-orange-500 transition-colors">
              {alt || 'Untitled Image'}
            </p>
          )}
        </div>
      )
    })}
  </div>
)
}
