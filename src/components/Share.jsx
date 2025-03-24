import React from "react";
import Image from "./Image";

export default function Share() {
  return (
    <div className="flex  gap-4 p-4">
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden ">
        <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
      </div>

      <div className="flex-1 flex flex-col">
        <div className=" flex flex-col border-b-[1px] border-borderGray">
          <input
            className="outline-none bg-transparent placeholder:text-textGray text-xl"
            type="text"
            placeholder="What's happening?"
          />
          <div className="flex items-center gap-2 my-4 ">
            <div className="relative w-5 h-5 rounded-full overflow-hidden ">
              <Image
                path="general/avatar.png"
                alt=""
                w={100}
                h={100}
                tr={true}
              />
            </div>
            <span className="text-iconBlue text-sm">Everyone can reply</span>
          </div>
        </div>
        <div className="flex mt-2 items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Image path="icons/image.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="icons/gif.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="icons/poll.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="icons/emoji.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="icons/schedule.svg" alt="" w={20} h={20} className="cursor-pointer"/>
            <Image path="icons/location.svg" alt="" w={20} h={20} className="cursor-pointer"/>
          </div>
          <button className="py-2 px-4 rounded-full bg-white text-black">Post</button>
        </div>
      </div>
    </div>
  );
}
