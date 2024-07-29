import React from "react";
import { myImg } from "../Assests/images";

const WhoIsThisFor = () => {
  return (
    <div>
        <div className="w-full flex items-center justify-center pt-3 pb-8 text-3xl font-bold text-center mb-8">
            Who is this for?
        </div>
      <div className="w-full grid grid-cols-3 gap-10 max-md:grid-cols-1">
        <div className="relative rounded-[14px] overflow-hidden">
          <img src={myImg} alt="Students" className="w-full" />
          <p className="absolute bottom-0 left-0 w-full h-full p-5 flex items-end justify-start bg-gradient-to-t from-emerald-700 to-transparent to-60%">
            Students
          </p>
        </div>
        <div className="relative rounded-[14px] overflow-hidden">
          <img src={myImg} alt="Students" className="w-full" />
          <p className="absolute bottom-0 left-0 w-full h-full p-5 flex items-end justify-start bg-gradient-to-t from-emerald-700 to-transparent to-60%">
            Entrepreneurs
          </p>
        </div>
        <div className="relative rounded-[14px] overflow-hidden">
          <img src={myImg} alt="Students" className="w-full" />
          <p className="absolute bottom-0 left-0 w-full h-full p-5 flex items-end justify-start bg-gradient-to-t from-emerald-700 to-transparent to-60%">
            Software Engineers
          </p>
        </div>
        <div className="relative rounded-[14px] overflow-hidden">
          <img src={myImg} alt="Students" className="w-full" />
          <p className="absolute bottom-0 left-0 w-full h-full p-5 flex items-end justify-start bg-gradient-to-t from-emerald-700 to-transparent to-60%">
            Marketers
          </p>
        </div>
        <div className="relative rounded-[14px] overflow-hidden">
          <img src={myImg} alt="Students" className="w-full" />
          <p className="absolute bottom-0 left-0 w-full h-full p-5 flex items-end justify-start bg-gradient-to-t from-emerald-700 to-transparent to-60%">
            Future of Forward Thinker
          </p>
        </div>
        <div className="relative rounded-[14px] overflow-hidden">
          <img src={myImg} alt="Students" className="w-full" />
          <p className="absolute bottom-0 left-0 w-full h-full p-5 flex items-end justify-start bg-gradient-to-t from-emerald-700 to-transparent to-60%">
            Enthusiasts
          </p>
        </div>

        </div>
        <div className="text-center pt-14 w-full flex flex-col items-center justify-center">
          <p className="">
            <strong>Picture this : </strong>In just 12 
          </p>
          <p className="text-emerald-500 pt-8 font-medium text-2xl">
            This future can be yours - all it takes is one decision!
          </p>
        </div>
    </div>
  );
};

export default WhoIsThisFor;
