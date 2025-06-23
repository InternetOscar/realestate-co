'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface CarouselProps {
  images: any[]
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // adjust time here

    return () => {
      clearInterval(intervalId)
    }
  }, [currentIndex, images])

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 < images.length ? prevIndex + 1 : 0))
  }

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1))
  }

  return (
    // Your carousel container
    <div className="relative">
      {/* The swipeable carousel */}
      <div className="carousel relative snap-mandatory overflow-hidden" id="my-carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item min-h-screen aspect-square ${
              currentIndex === index ? 'snap-center' : ''
            }`}
          >
            <Image src={image.asset.url} alt={image.title} width={800} height={600} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
