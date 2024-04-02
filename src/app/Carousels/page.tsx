"use client";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import im1 from "../../../public/0.jpg";
import im2 from "../../../public/1.jpg";
import im3 from "../../../public/2.jpg";
const Page = () => {
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const cadre = useRef<HTMLDivElement>(null);
  const cadrebg = useRef<HTMLDivElement>(null);

  const tl = gsap.timeline();
  const rl = gsap.timeline();
  const xl = gsap.timeline();

  useEffect(() => {});

  const nextSlide = () => {
    if (cadre.current?.children[0].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive2: true,
        isActive3: false,
      });
      tl.to(
        cadre.current?.children[0],
        {
          delay: 0.2,
          x: "-100%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      )
        .fromTo(
          cadre.current?.children[0],
          {
            ease: "sine.inOut",
            filter: "saturate(44)",
            duration: 0.7,
          },
          {
            ease: "sine.inOut",
            filter: "saturate(0)",
            duration: 0.7,
          },
          "<"
        )
        .to(
          cadre.current?.children[1],
          {
            x: "-100%",
            duration: 0.7,

            ease: "expo.inOut",
          },
          "<"
        );
      tl.to(
        cadre.current?.children[2],
        {
          x: "-100%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      );
    }

    if (cadrebg.current?.children[0].classList.contains("active")) {
      rl.to(
        cadrebg.current?.children[0],
        {
          delay: 0.4,
          x: "-100%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[1],
        {
          x: "-100%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[2],
        {
          x: "-100%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
    }

    if (cadre.current?.children[1].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive2: false,
        isActive3: true,
      });
      tl.to(
        cadre.current?.children[0],
        {
          delay: 0.2,
          x: "-200%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      )
        .to(
          cadre.current?.children[1],
          {
            x: "-200%",
            duration: 0.7,

            ease: "expo.inOut",
          },
          "<"
        )
        .fromTo(
          cadre.current?.children[1],
          {
            ease: "sine.inOut",
            filter: "saturate(44)",
            duration: 0.7,
          },
          {
            ease: "sine.inOut",
            filter: "saturate(0)",
            duration: 0.7,
          },
          "<"
        )
        .to(
          cadre.current?.children[2],
          {
            x: "-200%",
            duration: 0.7,

            ease: "expo.inOut",
          },
          "<"
        );
    }

    if (cadrebg.current?.children[1].classList.contains("active")) {
      rl.to(
        cadrebg.current?.children[0],
        {
          delay: 0.4,
          x: "-200%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[1],
        {
          x: "-200%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[2],
        {
          x: "-200%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
    }

    if (cadre.current?.children[2].classList.contains("active")) {
      setState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
      });
      tl.to(
        cadre.current?.children[0],
        {
          delay: 0.2,
          x: "0%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      );
      tl.to(
        cadre.current?.children[1],
        {
          x: "0%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      );
      tl.to(
        cadre.current?.children[2],
        {
          x: "0%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      ).fromTo(
        cadre.current?.children[2],
        {
          ease: "sine.inOut",
          filter: "saturate(44)",
          duration: 0.7,
        },
        {
          ease: "sine.inOut",
          filter: "saturate(0)",
          duration: 0.7,
        },
        "<"
      );
    }

    if (cadrebg.current?.children[2].classList.contains("active")) {
      rl.to(
        cadrebg.current?.children[0],
        {
          delay: 0.4,
          x: "0%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[1],
        {
          x: "0%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[2],
        {
          x: "-0%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
    }
  };

  const prevSlide = () => {
    if (cadre.current?.children[0].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive2: false,
        isActive3: true,
      });
      tl.to(
        cadre.current?.children[0],
        {
          delay: 0.2,
          x: "-200%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      )
        .fromTo(
          cadre.current?.children[0],
          {
            ease: "sine.inOut",
            filter: "saturate(44)",
            duration: 0.7,
          },
          {
            ease: "sine.inOut",
            filter: "saturate(0)",
            duration: 0.7,
          },
          "<"
        )
        .to(
          cadre.current?.children[1],
          {
            x: "-200%",
            duration: 0.7,

            ease: "expo.inOut",
          },
          "<"
        )
        .to(
          cadre.current?.children[2],
          {
            x: "-200%",
            duration: 0.7,

            ease: "expo.inOut",
          },
          "<"
        );
    }

    if (cadrebg.current?.children[0].classList.contains("active")) {
      rl.to(
        cadrebg.current?.children[0],
        {
          delay: 0.4,
          x: "-200%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[1],
        {
          x: "-200%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[2],
        {
          x: "-200%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
    }

    if (cadre.current?.children[1].classList.contains("active")) {
      setState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
      });
      tl.to(
        cadre.current?.children[0],
        {
          delay: 0.2,
          x: "0%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      );
      tl.to(
        cadre.current?.children[1],
        {
          x: "0%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      )
        .fromTo(
          cadre.current?.children[1],
          {
            ease: "sine.inOut",
            filter: "saturate(44)",
            duration: 0.7,
          },
          {
            ease: "sine.inOut",
            filter: "saturate(0)",
            duration: 0.7,
          },
          "<"
        )
        .to(
          cadre.current?.children[2],
          {
            x: "0%",
            duration: 0.7,

            ease: "expo.inOut",
          },
          "<"
        );
    }

    if (cadrebg.current?.children[1].classList.contains("active")) {
      rl.to(
        cadrebg.current?.children[0],
        {
          delay: 0.4,
          x: "0%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[1],
        {
          x: "0%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[2],
        {
          x: "0%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
    }

    if (cadre.current?.children[2].classList.contains("active")) {
      setState({
        isActive1: false,
        isActive2: true,
        isActive3: false,
      });
      tl.to(
        cadre.current?.children[0],
        {
          delay: 0.2,
          x: "-100%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      );
      tl.to(
        cadre.current?.children[1],
        {
          x: "-100%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      );
      tl.to(
        cadre.current?.children[2],
        {
          x: "-100%",
          duration: 0.7,

          ease: "expo.inOut",
        },
        "<"
      ).fromTo(
        cadre.current?.children[2],
        {
          ease: "sine.inOut",
          filter: "saturate(44)",
          duration: 0.7,
        },
        {
          ease: "sine.inOut",
          filter: "saturate(0)",
          duration: 0.7,
        },
        "<"
      );
    }

    if (cadrebg.current?.children[2].classList.contains("active")) {
      rl.to(
        cadrebg.current?.children[0],
        {
          delay: 0.4,
          x: "-100%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[1],
        {
          x: "-100%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
      rl.to(
        cadrebg.current?.children[2],
        {
          x: "-100%",
          duration: 0.7,

          ease: "expo",
        },
        "<"
      );
    }
  };

  return (
    <div className="w-full grayscale relative min-h-screen  justify-center items-center overflow-hidden   ">
      <div className="absolute blur-sm h-full flex justify-center items-center w-full ">
        <div ref={cadrebg} className="relative cuv flex h-full w-full">
          <div
            className={`cdr1  ${
              state.isActive1 ? "active" : null
            }   h-full justify-start flex-shrink-0 w-full  flex flex-col`}
          >
            <Image
              src={im1}
              alt="landscape"
              className="object-cover  object-top-center h-full w-full"
            />
          </div>
          <div
            className={`cdr2  ${
              state.isActive2 ? "active" : null
            }   h-full justify-start flex-shrink-0 w-full  flex flex-col`}
          >
            <Image
              src={im3}
              alt="landscape"
              className="object-cover  object-top-center h-full w-full"
            />
          </div>
          <div
            className={`  ${
              state.isActive3 ? "active" : null
            }   h-full justify-start flex-shrink-0 w-full  flex flex-col`}
          >
            <Image
              src={im2}
              alt="landscape"
              className="object-cover   object-top-center h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full   flex-col flex justify-center items-center">
        <div
          ref={cadre}
          className=" top-0 left-0 cuve  overflow-hidden cadre flex  w-[347px] h-[458px] "
        >
          <div
            className={`   ${
              state.isActive1 ? "active" : null
            }   h-[400px] justify-start flex-shrink-0 w-[347px]  flex flex-col`}
          >
            <div className="w-full h-[400px] ">
              <Image
                src={im1}
                alt="landscape"
                className="object-cover  object-center h-full w-full"
              />
            </div>
            <span className="text-xl py-4 w-full  font-mono text-white">
              Biyuij kiop
            </span>
          </div>

          <div
            className={`  ${
              state.isActive2 ? "active" : null
            }   h-[400px] justify-start flex-shrink-0 w-[347px]  flex flex-col`}
          >
            <div className="w-full h-[400px] ">
              <Image
                src={im3}
                alt="landscape"
                className="object-cover  object-center h-full w-full"
              />
            </div>
            <h3 className="text-xl py-4 font-mono text-white">
              {" "}
              Bassuku yandj
            </h3>
          </div>

          <div
            className={`  ${
              state.isActive3 ? "active" : null
            }   h-[400px] justify-start flex-shrink-0 w-[347px]  flex flex-col`}
          >
            <div className="w-full h-[400px] flex justify-center items-center ">
              <Image
                src={im2}
                alt="landscape"
                className="object-cover  object-center h-full w-full"
              />
            </div>
            <h3 className="text-xl py-4 font-mono text-white">Bioju kuito</h3>
          </div>
        </div>
        <div className="flex justify-end  relative  w-1/4 pr-12 py-4 gap-x-4 items-end ">
          <button onClick={() => prevSlide()} className="cursor-pointer">
            <ArrowLeft />
          </button>
          <button onClick={() => nextSlide()} className="cursor-pointer">
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
