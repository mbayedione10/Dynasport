
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  className?: string
  children?: React.ReactNode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const CarouselContext = React.createContext<CarouselApi | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps
>(({
  opts,
  plugins,
  orientation = "horizontal",
  className,
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y"
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return
    }

    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!api) {
      return
    }

    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider value={api}>
      <div
        ref={ref}
        className={`relative ${className || ""}`}
        role="region"
        aria-roledescription="carousel"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        <div
          ref={carouselRef}
          className="overflow-hidden"
        >
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`flex ${className || ""}`}
    {...props}
  />
))
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    aria-roledescription="slide"
    className={`flex-shrink-0 flex-grow-0 basis-full ${className || ""}`}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const api = useCarousel()

  return (
    <button
      ref={ref}
      className={`absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 ${className || ""}`}
      onClick={() => api?.scrollPrev()}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous</span>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const api = useCarousel()

  return (
    <button
      ref={ref}
      className={`absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 ${className || ""}`}
      onClick={() => api?.scrollNext()}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next</span>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
