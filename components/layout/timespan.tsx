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

export function TimeSpan(props: spanProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // Sets Number to Hook
    api.on("select", () => {
      var currentNum: number = api.selectedScrollSnap() + 1;
      props.TimeHook(currentNum);
    });
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: "true",
      }}
      orientation="vertical"
      className="w-full max-w-xs"
      setApi={setApi}
    >
      <CarouselContent className="-mt-1 h-[108px]">
        {Array.from({ length: props.length }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-4">
                  <span className="text-3xl font-semibold">
                    {props.length == 12 ? index + 1 : index}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="h-20 rounded-md" />
      <CarouselNext className="h-20 rounded-md" />
    </Carousel>
  );
}
