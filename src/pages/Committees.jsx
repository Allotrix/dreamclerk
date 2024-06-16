import React from "react";
import GradientBox from "../components/GradientBox";
import { COMMITTEES } from "../utils/Constants";

const Committees = () => {
  return (
    <>
      <main className="relative overflow-hidden">
        <section
          id="committees"
          className="flex  flex-col text-center gap-8 py-24 mt-24  "
        >
          <h1 className="md:text-[60px] text-4xl font-bold text-[white]">
            Committees
          </h1>

          {COMMITTEES.map((element, index) => (
            <GradientBox
              key={index}
              tag={element.com}
              title={element.comAgenda}
              photo={element.comLogo}
              buttonName={"Details"}
              link={`/committees/${element.comAbb.toLowerCase()}`}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Committees;
