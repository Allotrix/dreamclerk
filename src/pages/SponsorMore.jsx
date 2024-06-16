import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SPONSORS } from "../utils/Constants";

const SponsorMore = () => {
  const [sponsor, setSponsor] = useState({});
  const [sponsorIndex, setSponsorIndex] = useState(0);
  const params = useParams();
  const { sponsorName } = params;

  useEffect(() => {
    const fetchCommittee = () => {
      const decodedSponsorName = decodeURIComponent(sponsorName).toLowerCase();
      for (let i = 0; i < SPONSORS.length; i++) {
        if (SPONSORS[i].SPONSORNAME.toLowerCase() === decodedSponsorName) {
          setSponsor(SPONSORS[i]);
          setSponsorIndex(i);
          break;
        }
      }
    };

    fetchCommittee();
  }, [sponsorName]);

  return (
    <main className="relative overflow-hidden">
      <section className="flex flex-col text-center gap-8  mt-24 justify-center items-center ">
        <img className="object-cover self-center P-10" src={sponsor.COVERIMG}/>
  
            
        <h1 className=" text-[60px] font-bold text-[white]">{sponsor.SPONSORNAME}</h1>
        <p className="text-[#CDCDCD]  mt-[-45px]">{sponsor.TAG}</p>
        <div className='w-[80%] flex flex-col p-8 border-2 border-mamun-green rounded-md text-[white] items-center gap-4'>

            {sponsor.DESC}

            <a href={sponsor.HREF} target="blank"> 
            <button className="border-[1px] border-mamun-light-blue bg-transparent px-[60px] py-[2px] rounded-md min-w-min flex items-center justify-center">
            Visit Us

            </button>
        </a>
        </div>
        

      
      </section>
    </main>
  );
};

export default SponsorMore;
