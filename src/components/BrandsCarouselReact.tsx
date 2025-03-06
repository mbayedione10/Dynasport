import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "./ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { partenaires } from '../data/data';

export function BrandsCarouselReact() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          Nos marques partenaires
        </h2>

        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {partenaires.map((brand, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <div className="p-1">
                  <Card className="h-32">
                    <CardContent className="flex h-full items-center justify-center p-6 hover:shadow-md transition-shadow">
                      <img 
                        src={brand.logo} 
                        alt={`Logo ${brand.name}`}
                        className="w-full h-16 object-contain"
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                        width="150"
                        height="64"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static translate-y-0 mr-2" />
            <CarouselNext className="relative static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default BrandsCarouselReact;