import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick } from "react-icons/gi";
import gsap from "gsap";
function App() {
  const [show, setShow] = useState("null");
  const images = useRef([]);
  const h1F = useRef([]);
  const h2F = useRef([]);
  const s1 = useRef([]);
  const s2 = useRef([]);
  const s3 = useRef([]);
  const s4 = useRef([]);
  const mainRef = useRef(null);
  const indexRef = useRef(0);
  const indexRef2 = useRef(0);
  const indexRefs1 = useRef(0);
  const indexRefs2 = useRef(0);
  const indexRefs3 = useRef(0);
  const indexRefs4 = useRef(0);
  const indexImages = useRef(0);
  const imagesZindex = useRef(10);

  useEffect(() => {
    images.current = document.querySelectorAll(".img");
    mainRef.current = document.querySelector(".main");
    h1F.current = document.querySelectorAll(".h1F");
    h2F.current = document.querySelectorAll(".h2F");
    s1.current = document.querySelectorAll(".s1");
    s2.current = document.querySelectorAll(".s2");
    s3.current = document.querySelectorAll(".s3");
    s4.current = document.querySelectorAll(".s4");
    gsap.set(images.current[0], { opacity: 1, display: "block" });
  }, []);

  let x = "100%";

  const handleClick = () => {
    // Create a new timeline
    if (x === "100%") {
      x = "-100%";
    } else {
      x = "100%";
    }
    let tl = gsap.timeline(0);
    // First animation: fade out the current image
    gsap.to(images.current[indexImages.current], {
      duration: 1.7,
      opacity: 0,
      scale: 2,
      x: x,
      ease: "power4.out",
      onComplete: function () {
        gsap.set(this.targets()[0], {
          scale: 1,
          opacity: 1,
          display: "none",
          x: "0%",
        });
      },
    });

    if (indexImages.current === images.current.length - 1) {
      indexImages.current = 0;
    } else {
      indexImages.current++;
    }

    tl.set(images.current[indexImages.current], {
      scale: 1,
      opacity: 0,
      display: "block",
      ease: "power4.out",
    }).to(images.current[indexImages.current], {
      duration: 1.8,
      opacity: 1,
      ease: "power4.out",
    });
    console.log(indexImages.current);
    const animateElements = (elements, indexRef) => {
      if (mainRef.current && elements.length > 0) {
        mainRef.current.classList.add("pointer-events-none");

        const currentIndex = indexRef.current;
        const nextIndex =
          currentIndex === elements.length - 1 ? 0 : currentIndex + 1;

        if (currentIndex === 0) {
          gsap.to(elements[currentIndex], {
            duration: 1,
            y: "-=100%",
            opacity: 0,
            ease: "power4.out",
            onComplete: function () {
              gsap.set(this._targets[0], { y: "100%", opacity: 1 });
            },
          });
        } else {
          gsap.to(elements[currentIndex], {
            duration: 1,
            y: "-=100%",
            opacity: 0,
            ease: "power4.out",
            onComplete: function () {
              gsap.set(this._targets[0], { y: "0%", opacity: 1 });
            },
          });
        }

        gsap.to(elements[nextIndex], {
          duration: 1,
          y: "-=100%",
          opacity: 1,
          ease: "power4.out",
          onComplete: function () {
            if (mainRef.current) {
              mainRef.current.classList.remove("pointer-events-none");
            }
          },
        });

        indexRef.current = nextIndex;
      }
    };

    animateElements(h1F.current, indexRef);
    animateElements(h2F.current, indexRef2);
    animateElements(s1.current, indexRefs1);
    animateElements(s2.current, indexRefs2);
    animateElements(s3.current, indexRefs3);
    animateElements(s4.current, indexRefs4);
  };

  const Horsepower = [
    {
      icon: "FaCarAlt",
      name: "Horsepower",
      text: "450 HP",
    },
    {
      icon: "FaCarAlt",
      name: "Horsepower",
      text: "350 HP",
    },
    {
      icon: "FaCarAlt",
      name: "Horsepower",
      text: "550 HP",
    },
  ];
  const EngineNumber = [
    {
      icon: "FaGear",
      name: "Engine Number",
      text: "3.0L V6",
    },
    {
      icon: "FaGear",
      name: "Engine Number",
      text: "2.5L Inline-4",
    },
    {
      icon: "FaGear",
      name: "Engine Number",
      text: "4.0L V8",
    },
  ];

  const FuelType = [
    {
      icon: "BsFillFuelPumpFill",
      name: "Fuel Type",
      text: "Petrol",
    },
    {
      icon: "BsFillFuelPumpFill",
      name: "Fuel Type",
      text: "Diesel",
    },
    {
      icon: "BsFillFuelPumpFill",
      name: "Fuel Type",
      text: "Electric",
    },
  ];
  const Transmission = [
    {
      icon: "GiGearStick",
      name: "Transmission",
      text: "Automatic",
    },
    {
      icon: "GiGearStick",
      name: "Transmission",
      text: "Manual",
    },
    {
      icon: "GiGearStick",
      name: "Transmission",
      text: "Automatic",
    },
  ];
  return (
    <>
     <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color='255,236,236'
      outerAlpha={0.2}
      innerScale={0.1}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <div className="controls absolute top-0 right-0 z-[400] flex justify-center items-center p-4">
        <button
          onClick={() => {
            setShow(show === "null" ? "!hidden" : "null");
          }}
          className="p-2 text-white bg-[#5c5c5c85] rounded-md cursor-pointer"
          title="Toggle visibility"
        >
          {show == "!hidden" ? <IoMdEyeOff /> : <IoEye />}
        </button>
      </div>
      <div className="w-full h-screen overflow-hidden bg-red-900 pointer-events-none bgImage">
        <img
          src="/images/1.jpg"
          alt="Image1"
          className="absolute hidden object-cover w-full h-full opacity-0 img"
        />
        <img
          src="/images/2.jpg"
          alt="Image2"
          className="absolute hidden object-cover w-full h-full opacity-0 img"
        />
        <img
          src="/images/3.jpg"
          alt="Image1"
          className="absolute hidden object-cover w-full h-full opacity-0 img"
        />
      </div>
      <div
        onClick={handleClick}
        className="absolute top-0 left-0 w-full h-screen bg-[#00000069]  justify-start items-center flex flex-row main z-[300] "
      >
        <div
          className={`flex  justify-center gap-y-4 items-start  w-[50%] h-[70%] flex-col ${show}`}
        >
          <div>
            <div className="block w-[600px]  h-[14vw] overflow-hidden  left p-0 relative">
              <h1 className="h1F">R2D2</h1>
              <h1 className="h1F">C3PO</h1>
              <h1 className="h1F">BP68</h1>
            </div>
            <div className="block  h-[14vw] overflow-hidden  sleft p-0">
              <h1 className="h2F">Lamborghini</h1>
              <h1 className="h2F">Honda</h1>
              <h1 className="h2F">Porsche </h1>
            </div>
            <div className="button ml-[8%] flex justify-start items-center ">
              <button className=" transition-all ease-out hover:translate-x-2 p-2 text-white font-[400] text-  xl bg-[#ffffff00] rounded-md px-6 flex items-center justify-center gap-x-3 border-zinc-100 border-[1px]">
                Explore
                <span className="inline-flex ">
                  <GoArrowRight size={"1.1rem"} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-3 right w-[50%]   ${show}`}
        >
          <div className="flex flex-row items-center justify-center gap-3 ">
            <div className="w-[120px] h-[90px] overflow-hidden relative">
              {EngineNumber.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[120px] h-[90px] bg-[#ffffff31] text-white rounded-md flex flex-col justify-center items-center p-2 s1 absolute"
                  >
                    <FaGear />
                    <p className="mt-3 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-[120px] h-[90px] overflow-hidden relative">
              {FuelType.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[120px] h-[90px] bg-[#ffffff31] text-white rounded-md flex flex-col justify-center items-center p-2 s2 absolute"
                  >
                    <BsFillFuelPumpFill />
                    <p className="mt-3 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-[120px] h-[90px] overflow-hidden relative">
              {Transmission.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[120px] h-[90px] bg-[#ffffff31] text-white rounded-md flex flex-col justify-center items-center p-2 s3 absolute"
                  >
                    <GiGearStick />
                    <p className="mt-3 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-[120px] h-[90px] overflow-hidden relative">
              {Horsepower.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[120px] h-[90px] bg-[#ffffff31] text-white rounded-md flex flex-col justify-center items-center p-2 s4 absolute"
                  >
                    <FaCarAlt />
                    <p className="mt-3 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
