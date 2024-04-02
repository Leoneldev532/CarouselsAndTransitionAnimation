import { useEffect } from "react";

type propstype = {
  timeline: gsap.core.Timeline;
};

const Transition = ({ timeline }: propstype) => {
  useEffect(() => {
    // const tl = gsap.timeline();
    timeline
      .to(
        ".t1",
        {
          rotate: "-24deg",
          ease: "power1.out",
          transformOrigin: "50% 50%",
        },
        "<"
      )
      .to(
        ".t2",
        {
          rotate: "-24deg",

          ease: "power1.out",
          transformOrigin: "50% 50%",
        },
        "<"
      )
      .to(".tmain", {
        scale: 3.5,
        duration: 0.8,
        ease: "power2.out",
        transformOrigin: "50% 100%",
      })
      .to(
        ".maintransit",
        {
          marginTop: 40,
        },
        "<"
      )
      .to(
        ".tmain",
        {
          opacity: 0,
        },
        "-=0.2"
      )
      .to(".maintransit", {
        opacity: 0,
        display: "none",
      });
  }, []);

  return (
    <div className="relative  maintransit  overflow-hidden min-h-screen flex w-full  bg-black justify-center items-center ">
      <div className=" w-full h-full  tmain flex justify-center items-center ">
        <div className="h-36 relative  bg-white w-6 t1 "></div>
        <div className="h-6 relative  bg-white w-24  t2  top-20 left-4 rotate-13 "></div>
      </div>
    </div>
  );
};

export default Transition;
