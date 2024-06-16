import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function StickyScroll({OBJECT}) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        markers: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery flex w-[90%] mx-auto pt-[150px]">
      <div className="left w-[90%] ml-auto">
       { OBJECT.map((chair, index)=>(
            <article key={index} className='flex flex-col gap-3 md:w-[70%] mb-[500px]'>
                <h4 className='text-4xl font-bold'>
                    {chair.name}
                </h4>
                <h5 className='gradient-heading text-xl font-bold'>
                    {chair.designation}
                </h5>
                <p className='text-xl text-justify'>
                    {chair.description}
                </p>
            </article>
        ))}
      </div>
      <div className="rightblock w-1/2 h-screen flex flex-col items-center">
        <div className="relative w-[40vw] h-[40vw]">
            {OBJECT.map((chair, index)=>(
                <div key={index} className="photo absolute w-full h-full">
                    
                <img
                src= {chair.img}
                alt={`img-${index}`}
                className="w-full h-full object-cover object-center"
                />
            </div>

            ))}
        </div>
      </div>
    </div>
  );
}

export default StickyScroll;
