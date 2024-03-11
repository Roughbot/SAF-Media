"use client";
import Autoplay from "embla-carousel-autoplay";
import PostCards from "../postCards/PostCards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const autoPlay = Autoplay({
  delay: 5000,
});

const Featured = () => {
  return (
    <div>
      <div className="py-20">
        <h1 className="text-start px-10 font-bold text-white">
          <span className="text-black text-8xl">Welcom</span>
          <br />
          <p className="text-3xl">Discover new stories and technologies</p>
        </h1>
      </div>
      <div className="sm:px-8 md:px-16 lg:px-36">
        <Carousel plugins={[autoPlay]}>
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="md:pl-4">
              <PostCards />
            </CarouselItem>
            <CarouselItem className="md:pl-4">
              <PostCards />
            </CarouselItem>
            <CarouselItem className=" md:pl-4">
              <PostCards />
            </CarouselItem>
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Featured;
