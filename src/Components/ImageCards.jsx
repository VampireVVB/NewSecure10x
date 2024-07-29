import React from "react";
import { myImg } from "../Assests/images";
import EnrollButton from "../Assests/EnrollButton";


const ImageCards = () => {
    const s100 = "Lorem ipsum dolor us dosectetur dolorem, debitis quae obcaecati laboriosam corporis repellendus quisquam expedita iure repudiandae enim dolore consequuntur hic, ipsam sunt?"
  return (
    <div className="w-full pt-20 ">
      <div className="flex md:gap-9 max-md:gap-7 items-center justify-around max-md:flex-col">

        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s100}</p>
          </div>
        </div>
        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s100}</p>
          </div>
        </div>
        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s100}</p>
          </div>
        </div>
        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s100}</p>
          </div>
        </div>

        
      </div>

      <div className="w-full flex items-center justify-center flex-col pt-14">
        <p className="font-semibold tracking-wider text-2xl pb-5">Seize the Opportunity Before it is too Late!</p>
        <p className="font-light text-lg tracking-wide pb-1">Mastering Cyber Security Today is Like Investing in in Bitcoin in 2015</p>
        <p className="font-light text-lg tracking-wide pb-5">Or Like Starting a YouTube Channel in 2010</p>
        <p className="bg-[#04e2a8] text-black py-6 px-10 font-semibold tracking-tight text-xl">You'll be Jobless by 2025 if You Don't Master CYBER SECURITY, Take Action NOW!</p>
      </div>

        <div className="w-full items-center justify-center flex pt-10">
            <EnrollButton/>
        </div>

    </div>
  );
};

export default ImageCards;
