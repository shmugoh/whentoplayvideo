import React from "react";
import { TimeSpan } from "@/components/layout/timespan";
import { Toggle } from "../ui/toggle";

type propsTimeSlot = {
  currentLength: number;
  className?: string;
  HourHook: React.Dispatch<React.SetStateAction<number>>;
  MinHook: React.Dispatch<React.SetStateAction<number>>;
  SecsHook: React.Dispatch<React.SetStateAction<number>>;
};

export function TimeSlot(props: propsTimeSlot) {
  return (
    <div>
      <div className={`${props.className} flex flex-row`}>
        <TimeSpan length={12} TimeHook={props.HourHook} />
        <TimeSpan length={60} TimeHook={props.MinHook} />
        <TimeSpan length={60} TimeHook={props.SecsHook} />
        <div className="space-y-4">
          <Toggle className="">AM</Toggle>
          <Toggle className="">PM</Toggle>
        </div>
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
