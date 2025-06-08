import { Media } from "pages/events";
import React from "react";
import EventsVideo from "@videos/amcros-events.mov";
import Instaplay from "next-video";
import Video from "next-video";

const MediaGrid = ({ columnsNum = 3, medias }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 pb-20 `}>
      {medias &&
        medias?.map((item: Media) => {
          return item.mediaType === "image" ? (
            <div className="col-span-1 aspect-square  overflow-hidden ">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="col-span-1 aspect-9/16 overflow-hidden ">
              <Video
                src={item.src}
                autoPlay
                loop
                muted
                className="w-full h-full object-contain z-0 "
              />
            </div>
          );
        })}
    </div>
  );
};

export default MediaGrid;
