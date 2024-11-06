import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface Review {
  name: string
  date: string
  rating: number
  content: string
}

interface SlideRatingProps {
  reviews: Review[]
}


export function SlideRating({reviews}: SlideRatingProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="p-6">
                  {/* Review Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  {/* Rating Stars */}
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-4 h-4 ${
                          starIndex < review.rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.196 3.68h3.874c.969 0 1.371 1.24.588 1.81l-3.132 2.26 1.196 3.68c.3.921-.755 1.688-1.54 1.17L10 13.187l-3.132 2.26c-.784.517-1.838-.249-1.539-1.17l1.196-3.68-3.132-2.26c-.784-.57-.38-1.81.588-1.81h3.874l1.196-3.68z" />
                      </svg>
                    ))}
                  </div>
                  {/* Review Content */}
                  <p className="text-gray-600">{review.content}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
  )
}
