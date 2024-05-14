'use client'
import React from 'react'
import {
    


    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
}from '@/components/ui/carousel'
import { Shoes } from './Hero'
import Autoplay from "embla-carousel-autoplay"
const CarouselProps = () => {
  return (
    <div>
      <Carousel     plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent>
            <CarouselItem>
                <Shoes />
            </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselProps
