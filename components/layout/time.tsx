import React from "react";
import { TimeCarousel } from "@/components/layout/carousel";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type propsTimeSlot = {
  currentLength: number;
  className?: string;
  HourHook: React.Dispatch<React.SetStateAction<number>>;
  MinHook: React.Dispatch<React.SetStateAction<number>>;
  SecsHook: React.Dispatch<React.SetStateAction<number>>;

  meridiem: any;
  setMeridiem: React.Dispatch<React.SetStateAction<string>>;
};

export function TimeSlot(props: propsTimeSlot) {
  return (
    <div className="flex flex-col md:flex-row md:gap-2">
      <div className="flex flex-row">
        <TimeCarousel length={12} TimeHook={props.HourHook} />
        <TimeCarousel length={60} TimeHook={props.MinHook} />
        <TimeCarousel length={60} TimeHook={props.SecsHook} />
      </div>
      <div className="space-y-4">
        <ToggleGroup
          className="flex flex-row mt-10 md:flex-col md:mt-0"
          variant="outline"
          type="single"
          value={props.meridiem}
          onValueChange={(meridiem) => {
            if (meridiem) props.setMeridiem(meridiem);
          }}
        >
          <ToggleGroupItem className="w-full" value="AM">
            AM
          </ToggleGroupItem>
          <ToggleGroupItem className="w-full" value="PM">
            PM
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* <div className="flex flex-row">
        <div className="flex flex-col" id="hours">
          <Button>↑</Button>
          <p>12</p>
          <Button>↓</Button>
        </div>

        <div className="flex flex-col" id="minutes">
          <Button className="w-max">↑</Button>
          <p>12</p>
          <Button>↓</Button>
        </div>

        <div className="flex flex-col" id="seconds">
          <Button className="w-max">↑</Button>
          <p>12</p>
          <Button>↓</Button>
        </div>
      </div> */}
    </div>
  );
}
