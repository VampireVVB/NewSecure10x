import React from "react";
import EnrollButton from "../Assests/EnrollButton";

const FooterFixed = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full flex items-end z-10 px-5 py-3 bg-opacity-80 bg-gray-700">
      <div className="w-full flex justify-between">
        <p className="text-green-500 font-bold text-2xl flex items-center justify-center"><span className="line-through text-white text-sm">Rs. 2000{" "}</span>{" "}FREE</p>
        <EnrollButton />
      </div>
    </footer>
  );
};

export default FooterFixed;
