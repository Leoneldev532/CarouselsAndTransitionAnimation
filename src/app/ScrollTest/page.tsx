"use client";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitType from "split-type";

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    const text = gsap.utils.toArray(".txt");
    const ligne = gsap.utils.toArray(".ligne");
    text.forEach((char: any) => {
      const text = new SplitType(char, { types: "lines,words" });

      tl.fromTo(
        text.words,
        {
          y: 100,
          //   skewY: 1,
          opacity: 0,
        },
        {
          y: 0,
          delay: 0.2,

          opacity: 1,
          duration: 0.7,
          //   skewY: 0,
          ease: "power3.out",
          stagger: {
            amount: 0.2,
          },
          transformOrigin: " 45.5234px 14px",
          scrollTrigger: {
            trigger: char,
            start: "top 95%",
            end: "bottom 95%",
            scrub: 7,
            markers: true,
            toggleActions: "restart none none reverse",
          },
        },
        "<"
      );
    });
    ligne.forEach((item: any) => {
      tl.to(
        item,
        {
          width: "100%",
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1100);
    });

    gsap.ticker.lagSmoothing(0);
  });

  //   https://www.youtube.com/watch?v=_LWinkSulwU

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="min-h-screen flex justify-center items-center w-full">
        {/* <h1 className="txt text-8xl  ">Helloss 123456</h1> */}
        <p className="txt text-2xl  text-black/70 w-1/2 px-36">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          reprehenderit molestiae dicta ut impedit, eum corporis cumque ducimus
          deleniti inventore, vero rem laborum enim magnam veritatis placeat
          quibusdam distinctio accusamus.
        </p>
      </div>
      {/* <div className="min-h-screen  w-full txto ">
        <h2 className="tx text-2xl text-black/70 w-full px-36">
        <span className="txt overflow-hidden block w-full  h-10 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          </span>
          <span className="txt overflow-hidden block w-full  h-10 ">
          reprehenderit molestiae dicta ut impedit, eum corporis cumque
            ducimus deleniti inventore, vero
            </span>

          <span className="txt overflow-hidden block w-full  h-10 ">
            rem laborum enim magnam veritatis placeat quibusdam distinctio
            accusamus.
          </span>
          </h2>
        </div> */}
      <div className="ligne w-0 h-4 bg-red-400"> hellodfgdf </div>
      <div className="min-h-screen  tx w-full bg-yellow txto">
        {/* <div className="square  h-16 w-16 bg-green-500"> */}
        <p className="txt text-2xl  text-black/70 w-1/2 px-36">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          reprehenderit molestiae dicta ut impedit, eum corporis cumque ducimus
          deleniti inventore, vero rem laborum enim magnam veritatis placeat
          quibusdam distinctio accusamus.
        </p>
      </div>

      <div className=" bg-green-200 w-full">
        <p className="txt text-2xl  text-black/70 w-1/2 px-36">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          reprehenderit molestiae dicta ut impedit, eum corporis cumque ducimus
          deleniti inventore, vero rem laborum enim magnam veritatis placeat
          quibusdam distinctio accusamus.
        </p>
      </div>
    </div>
  );
};

export default Page;
