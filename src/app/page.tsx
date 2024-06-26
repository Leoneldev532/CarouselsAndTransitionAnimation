"use client";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";
import SplitType from "split-type";
import im1 from "../../public/0.jpg";
import im2 from "../../public/1.jpg";
import im3 from "../../public/2.jpg";
export default function Home() {
  // useEffect(() => {
  //   gsap.set(".txt", { y: 0 });
  //   gsap.to(".txt", {
  //     duration: 0.5,
  //     y: 200,
  //     ease: "expo",
  //   });
  // }, []);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".t1",
      {
        y: -200,
      },
      {
        y: 0,
        duration: 1,
        ease: "power1",
      }
    )
      .fromTo(
        ".t2",
        {
          x: 200,
        },
        {
          x: 0,
          duration: 0.8,
          ease: "power1",
        },
        "-=1"
      )
      .to(
        ".t1",
        {
          delay: 1.4,
          rotate: "-24deg",
          ease: "power1.in",
          transformOrigin: "50% 50%",
        },
        "<"
      )
      .to(
        ".t2",
        {
          rotate: "-24deg",

          ease: "power1.in",
          transformOrigin: "50% 50%",
        },
        "<"
      )
      .to(".t1", {
        scale: 30.6,
        duration: 1.4,
        ease: "power2.in",
        transformOrigin: "50% 50%",
      })
      .to(
        ".t2",
        {
          // zoom: 10.6,
          y: 100,
          x: 380,
          duration: 1.2,
          scale: 8.6,
          ease: "power2.in",
        },
        "<"
      )
      .to(
        ".t2",
        {
          opacity: 0,
          duration: 0.2,

          ease: "expo.in",
        },
        "-=1.3"
      )
      .to(
        ".maintransit",
        {
          opacity: 0,
          duration: 0.2,
          ease: "expo",
          display: "none",
        },
        "-=0.4"
      );

    const text = document.querySelectorAll(".txt");
    const text4 = document.querySelectorAll(".txt4");
    const lin = document.querySelector(".lin");
    const img = gsap.utils.toArray(".img");
    const im = gsap.utils.toArray(".im");

    const ligne = gsap.utils.toArray(".ligne");
    text4.forEach((char: any) => {
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

    text.forEach((char: any) => {
      const text = new SplitType(char, { types: "words,lines" });

      tl.fromTo(
        text.words,
        {
          y: 120,
        },
        {
          y: 0,
          delay: 0.2,
          duration: 1.7,
          ease: "power3",
        },
        "<"
      );
    });
    tl.to(
      lin,
      {
        delay: 1,
        width: "100%",
        ease: "power2.out",
        duration: 0.7,
      },
      "<"
    );

    tl.to(
      img,
      {
        delay: 1,
        clipPath: " polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: "power2.out",
        duration: 0.7,
        stagger: {
          each: 0.4,
        },
      },
      "<"
    ).to(
      im,
      {
        scale: 1,
        stagger: {
          each: 0.4,
        },
      },
      "<"
    );
    ligne.forEach((item: any) => {
      tl.to(
        item,
        {
          width: "100%",
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            end: "bottom 95%",
            scrub: 7,
            markers: true,
            toggleActions: "restart none none reverse",
          },
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

  return (
    <main className="flex flex-col min-h-screen bg-white text-black police   overflow-hidden items-center justify-between">
      {/* <div className="relative  maintransit  overflow-hidden min-h-screen flex w-full  bg-black justify-center items-center ">
        <div className=" w-full h-full  tmain flex justify-center items-center ">
          <div className="h-36 relative  bg-white w-6 t1 "></div>
          <div className="h-6 relative  bg-white w-24  t2  top-20 left-4 rotate-13 "></div>
        </div>
      </div> */}
      <div className="  flex flex-col  p-36 ">
        <span className=" overflow-hidden text-3xl px-36">
          <span className="txt overflow-hidden block w-full h-10   ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis in
          </span>
          <span className="txt overflow-hidden block w-full h-10   ">
            earum quos at officiis alias cupiditate hic incidunt eos minus
            obcaecati id molestias deleniti expedita, mollitia cum quam? Vitae,
          </span>
          <span className="txt overflow-hidden block w-full h-10 ">
            reprehenderit numquam atque harum tempora nam illum corporis
            cupiditate dicta?
          </span>
          <div className="h-0.5 my-8 bg-gray-200 lin w-4"></div>
          <div className="min-h-[50vh] flex  gap-x-4 w-full ">
            <div className="w-1/3 h-[447px] img overflow-hidden">
              <Image
                alt={"bg"}
                src={im1}
                className={" scale-125 object-cover  im  bg-red-400"}
              />
            </div>
            <div className="w-1/3 h-[447px] img overflow-hidden">
              <Image
                alt={"bg"}
                src={im2}
                className={" scale-125 object-cover  im  bg-red-400"}
              />
            </div>
            <div className="w-1/3 h-[447px] img overflow-hidden">
              <Image
                alt={"bg"}
                src={im3}
                className={" scale-125 object-cover im   bg-red-400"}
              />
            </div>
          </div>
        </span>

        <div className="min-h-screen  ty flex justify-center items-center w-full my-16">
          <p className="txt4 overflow-hidden text-black   text-3xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis in
            earum quos at officiis alias cupiditate hic incidunt eos minus
            obcaecati id molestias deleniti expedita, mollitia cum quam? Vitae,
            reprehenderit numquam atque harum tempora nam illum corporis
            cupiditate dicta?
          </p>
        </div>
        <div className="ligne w-0 h-0.5 bg-red-400"> </div>

        <div className="  ty flex justify-center items-center w-full my-16">
          <p className="txt4 overflow-hidden text-black   text-3xl ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis in
            earum quos at officiis alias cupiditate hic incidunt eos minus
            obcaecati id molestias deleniti expedita, mollitia cum quam? Vitae,
            reprehenderit numquam atque harum tempora nam illum corporis
            cupiditate dicta?
          </p>
        </div>

        <div className="ligne w-0 h-0.5 bg-red-400"> </div>
      </div>
    </main>
  );
}
