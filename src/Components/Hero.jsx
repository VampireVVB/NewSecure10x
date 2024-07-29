import React from "react";
import { myImg } from "../Assests/images";
import EnrollButton from "../Assests/EnrollButton";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 lg:mb-36 pt-20">
      <div className="flex flex-wrap">
        <div className="w-full items-center justify-center flex">
          <div className="flex justify-center w-36 max-sm:w-48">
            <img
              src="logo.png"
              alt="video or another image"
              className="rounded-2xl border-4"
            />
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="flex flex-col items-center w-full justify-center">
            <h1 className="pb-10 text-6xl font-extralight tracking-tight mt-16 max-sm:mt-8 lg:text-8xl items-center justify-center flex text-center">
              Explore the New World of Cybersecurity
            </h1>
            <span className="max-sm:gap-2 bg-gradient-to-br from-rose-400  via-stone-400 to-fuchsia-400 bg-clip-text text-3xl font-normal flex flex-col items-center max-sm:items-start tracking-tight text-transparent">
              <p>
                Multiply your chances in obtaining a Secured Job Opportunity
              </p>
              <p>In Under 3 MONTHS!</p>
              <p>With our revolutionary Security Systems</p>
            </span>
            {/* <p className="my-2 max-w-xl py-6 font-light tracking-tighter"></p> */}
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center pt-14 pb-8">
        <img src={myImg} alt="video here" className="w-[60%]" />
      </div>

      <div className="w-full flex flex-col items-center justify-center max-sm:items-start pt-7 gap-7">
        <div className="text-transparent bg-clip-text border-slate-400 border-[3px] flex items-center justify-center flex-col py-7 gap-4 max-sm:gap-2 px-10 rounded-[20px] font-light text-2xl bg-gradient-to-br from-green-500 via-cyan-400 via-50% to-violet-300">
          <p>Out of 100 million tech professionals,</p>
          <p>
            Only an elite <span className="font-semibold">0.1%</span> fully master the complexities of CyberSecurity
          </p>
        </div>

        <div className="w-full flex items-center justify-center pt-8 tracking-wide max-sm:pt-4">
          <p className="text-4xl max-sm:text-2xl max-sm:tracking-tight">
            This Masterclass WILL put you in that{" "}
            <span className="underline decoration-blue-400 underline-offset-4">TOP 0.1%</span>
          </p>
        </div>
      </div>

      <div className="py-20 w-full flex items-center justify-center ">
        <EnrollButton />
      </div>
    </div>
  );
};

export default Hero;
