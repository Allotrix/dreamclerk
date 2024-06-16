import React from "react";
import { Link } from "react-router-dom";

const GradientBox = ({ tag, title,title2, photo, buttonName, link }) => {
  return (
    <div className="flex self-center items-center justify-center px-10 w-full max-w-[1200px]">
      <div className="rounded-[12px] p-px  py-10 w-full">
            <div className="rounded-[12px] py-10 md:p-10 bg-[#1E1E1E] text-[white] flex flex-col-reverse md:flex-row  justify-center items-center ">
                <div className="md:w-8/12 px-5 flex flex-col gap-10">
                    <p className="text-[#CDCDCD] text-left  ">{tag}</p>
                    <div>
                    <h1 className="font-bold text-white text-left text-3xl">{title}</h1>
                    <h1 className="font-bold text-white text-left text-3xl text-primary">{title2}</h1>

                    </div>


                    <Link to={link} className="border-[1px] border-primary bg-transparent px-[60px] py-[2px] rounded-md w-[40%] flex items-center justify-center">
                    {buttonName}
                    </Link>
                </div>

                <div className=" flex gap-4 items-center md:w-4/12 justify-center">
                    {/* <img
                    className="w-[200px] h-[200px] rounded-full"
                    src={photo}
                    alt="img"
                    /> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default GradientBox;
