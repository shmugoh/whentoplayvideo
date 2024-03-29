import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

type spanProps = {
  length: number;
  TimeHook: React.Dispatch<React.SetStateAction<number>>;
};

export function TimeCarousel(props: spanProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Sets Number to Hook
    api.on("select", () => {
      var currentNum: number = api.selectedScrollSnap() + 1;

      // Adjust logic based on the length
      props.TimeHook(props.length === 12 ? currentNum : currentNum - 1);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        startIndex: props.length === 12 ? 11 : 0,
      }}
      orientation="vertical"
      className="w-full max-w-xs"
      setApi={setApi}
    >
      <CarouselContent className="h-[108px] md:-mt-1 md:h-[108px]">
        {Array.from({ length: props.length }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="bg-destructive">
                <CardContent className="flex items-center justify-center p-6 md:p-4">
                  <span className="text-destructive-foreground text-3xl font-semibold">
                    {(index + 1 < 10 ? "0" : "") +
                      (props.length === 12 ? index + 1 : index)}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-destructive h-full -mt-3 md:mt-1 md:h-20 rounded-md" />
      <CarouselNext className="bg-destructive h-full -mb-4 md:mb-1.5 md:h-20 rounded-md" />
    </Carousel>
  );
}
