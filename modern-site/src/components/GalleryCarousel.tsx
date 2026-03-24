import { useEffect, useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { GallerySlide } from '../data/gallerySlides'

type GalleryCarouselProps = {
  slides: GallerySlide[]
}

function PauseIcon() {
  return (
    <span className="flex gap-1">
      <span className="block h-3.5 w-1.5 rounded-full bg-current" />
      <span className="block h-3.5 w-1.5 rounded-full bg-current" />
    </span>
  )
}

export function GalleryCarousel({ slides }: GalleryCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const canLoop = slides.length > 1

  useEffect(() => {
    const swiper = swiperRef.current
    if (!swiper?.autoplay) return

    if (isPaused) {
      swiper.autoplay.stop()
    } else {
      swiper.autoplay.start()
    }
  }, [isPaused])

  if (slides.length === 0) {
    return null
  }

  return (
    <div className="relative space-y-6">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.08}
        spaceBetween={12}
        breakpoints={{
          640: { slidesPerView: 1.35, spaceBetween: 14 },
          960: { slidesPerView: 2.15, spaceBetween: 18 },
          1280: { slidesPerView: 2.9, spaceBetween: 20 },
        }}
        grabCursor
        autoplay={
          canLoop ? { delay: 3600, disableOnInteraction: false, pauseOnMouseEnter: true, waitForTransition: true } : false
        }
        loop={canLoop}
        speed={900}
        watchOverflow
        watchSlidesProgress
        observer
        observeParents
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          setActiveIndex(swiper.realIndex)
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex)
        }}
        className="!overflow-visible [contain:layout_paint] [&_.swiper-slide]:transform-gpu [&_.swiper-wrapper]:will-change-transform [&_.swiper-wrapper]:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`${slide.title}-${index}`} className="h-auto">
            <article className="group relative aspect-[4/3] overflow-hidden rounded-[1.85rem] border border-black/10 bg-slate-200 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] dark:border-white/12">
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.05)_32%,rgba(0,0,0,0.72)_100%)]" />
              <div className="absolute right-5 top-5">
                <p className="text-lg font-black tracking-tight text-white drop-shadow-sm sm:text-[1.1rem]">
                  {slide.brand}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-4 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:p-6">
                <div className="max-w-[16rem]">
                  <p className="text-[0.82rem] font-semibold tracking-[0.01em] text-white/82 sm:text-[0.9rem]">
                    {slide.eyebrow}
                  </p>
                  <h3 className="mt-2 text-[1.4rem] font-black leading-[1.02] tracking-tight text-white sm:text-[2rem]">
                    {slide.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_10px_25px_-18px_rgba(255,255,255,0.85)] sm:px-5 sm:py-2.5 sm:text-base">
                  {slide.cta}
                </span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:relative sm:flex-nowrap">
        <div className="flex items-center gap-5">
          {slides.map((slide, index) => (
            <button
              key={`${slide.title}-dot`}
              type="button"
              onClick={() => {
                const swiper = swiperRef.current
                if (!swiper) return

                if (canLoop) {
                  swiper.slideToLoop(index)
                  return
                }

                swiper.slideTo(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'h-3 w-10 bg-black/40 dark:bg-white/85'
                  : 'h-2.5 w-2.5 bg-black/30 hover:bg-black/45 dark:bg-white/25 dark:hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsPaused((current) => !current)}
          aria-pressed={isPaused}
          aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
          disabled={!canLoop}
          className="grid h-11 w-11 place-items-center rounded-full bg-black/8 text-slate-900 transition-colors hover:bg-black/12 dark:bg-white/10 dark:text-white dark:hover:bg-white/16 sm:absolute sm:right-0"
        >
          {isPaused ? <span className="ml-0.5 text-[11px] font-bold">Play</span> : <PauseIcon />}
        </button>
      </div>
    </div>
  )
}
