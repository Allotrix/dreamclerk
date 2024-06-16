import React from "react";
import { Link } from "react-router-dom";

const SponsorsBox = ({ tag, companyName, title, photo, desc, buttonName, link }) => {
  return (
    <div className="flex self-center items-center justify-center px-10 w-full max-w-[1200px]">
      <div className="rounded-[12px] p-px bg-gradient-to-r from-mamun-green to-mamun-light-blue w-full">
        <div className="rounded-[12px] md:p-10 flex-col-reverse gap-7 py-8 md:flex-row bg-[black] text-[white] flex justify-center items-center min-h-[400px] w-full">
          <div className="md:w-8/12 flex flex-col gap-6 px-7 h-full">
            <p className="gradient-subheading text-2xl text-left font-bold">
              {companyName}
            </p>
            <p className="text-[#CDCDCD] text-left mt-[-25px]">{tag}</p>
            <h1 className="font-bold text-white text-left text-2xl">{title}</h1>
            <p className="text-[#CDCDCD] text-left">
              {desc.split(' ').slice(0, 20).join(' ')}....
            </p>
            <Link to={link} className="border-[1px] border-mamun-light-blue bg-transparent px-[60px] py-[2px] rounded-md w-[40%] flex items-center justify-center">
              {buttonName}
            </Link>
          </div>
          <div className="flex gap-4 items-center md:w-4/12 justify-center">
            <img
              className="w-[200px] h-[200px] rounded-full"
              src={photo}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsBox;
