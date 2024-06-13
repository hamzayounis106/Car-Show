import "./App.css";
import React, { useEffect, useRef } from "react";

import { GoArrowRight } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick } from "react-icons/gi";
import gsap from "gsap";
function App() {
  const h1F = useRef([]);
  const h2F = useRef([]);
  const s1 = useRef([]);
  const mainRef = useRef(null);
  const indexRef = useRef(0);
  const indexRef2 = useRef(0);
  const indexRefs1 = useRef(0);

  useEffect(() => {
    mainRef.current = document.querySelector(".main");
    h1F.current = document.querySelectorAll(".h1F");
    h2F.current = document.querySelectorAll(".h2F");
    s1.current = document.querySelectorAll(".s1");
  }, []);

  const handleClick = () => {
    if (mainRef.current && h1F.current.length > 0) {
      console.log("Turned waiting on");
      mainRef.current.classList.add("pointer-events-none");

      if (indexRef.current == 0) {
        gsap.to(h1F.current[indexRef.current], {
          duration: 1,
          y: "-=100%",
          opacity: 0,
          ease: "power4.out",
          onComplete: function () {
            gsap.set(this._targets[0], { y: "100%", opacity: 1 });
          },
        });
      }
      if (indexRef.current !== 0) {
        gsap.to(h1F.current[indexRef.current], {
          duration: 1,
          y: "-=100%",
          opacity: 0,
          ease: "power4.out",
          onComplete: function () {
            gsap.set(this._targets[0], { y: "0%", opacity: 1 });
          },
        });
      }

      indexRef.current =
        indexRef.current === h1F.current.length - 1 ? 0 : indexRef.current + 1;

      gsap.to(h1F.current[indexRef.current], {
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
    }
    if (mainRef.current && h2F.current.length > 0) {
      console.log("Turned waiting on");
      mainRef.current.classList.add("pointer-events-none");

      if (indexRef2.current == 0) {
        gsap.to(h2F.current[indexRef2.current], {
          duration: 1,
          y: "-=100%",
          opacity: 0,
          ease: "power4.out",
          onComplete: function () {
            gsap.set(this._targets[0], { y: "100%", opacity: 1 });
          },
        });
      }
      if (indexRef2.current !== 0) {
        gsap.to(h2F.current[indexRef2.current], {
          duration: 1,
          y: "-=100%",
          opacity: 0,
          ease: "power4.out",
          onComplete: function () {
            gsap.set(this._targets[0], { y: "0%", opacity: 1 });
          },
        });
      }

      indexRef2.current =
        indexRef2.current === h2F.current.length - 1
          ? 0
          : indexRef2.current + 1;

      gsap.to(h2F.current[indexRef2.current], {
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
    }
    if (mainRef.current && s1.current.length > 0) {
      console.log("Turned waiting on");
      mainRef.current.classList.add("pointer-events-none");

      if (indexRefs1.current == 0) {
        gsap.to(s1.current[indexRefs1.current], {
          duration: 1,
          y: "-=100%",
          opacity: 0,
          ease: "power4.out",
          onComplete: function () {
            gsap.set(this._targets[0], { y: "100%", opacity: 1 });
          },
        });
      }
      if (indexRefs1.current !== 0) {
        gsap.to(s1.current[indexRefs1.current], {
          duration: 1,
          y: "-=100%",
          opacity: 0,
          ease: "power4.out",
          onComplete: function () {
            gsap.set(this._targets[0], { y: "0%", opacity: 1 });
          },
        });
      }

      indexRefs1.current =
        indexRefs1.current === s1.current.length - 1
          ? 0
          : indexRefs1.current + 1;

      gsap.to(s1.current[indexRefs1.current], {
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
    }
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
      <div className="w-full h-screen overflow-hidden bg-red-900 pointer-events-none bgImage">
        <img
          src="images/MY24-Civic-Type-R-gallery-18-1400-2x.jpg"
          alt="Image1"
          className="object-cover w-full h-full img "
        />
        <img
          src="/images/MY25-HR-V-gallery-15-1400-2x.jpg"
          alt="Image1"
          className="object-cover w-full h-full img"
        />
      </div>
      <div
        onClick={handleClick}
        className="absolute top-0 left-0 w-full h-screen bg-[#00000069]  justify-start items-center flex flex-row main "
      >
        <div className="flex  justify-center gap-y-4 items-start  w-[50%] h-[70%] flex-col">
          <div>
            <div className="block w-[600px]  h-[14vw] overflow-hidden  left p-0 relative">
              <h1 className="h1F">MY25</h1>
              <h1 className="h1F">MY24</h1>
              <h1 className="h1F">MY23</h1>
              <h1 className="h1F">MY22</h1>
            </div>
            <div className="block  h-[14vw] overflow-hidden  sleft p-0">
              <h1 className="h2F">Civic</h1>
              <h1 className="h2F">Honda</h1>
              <h1 className="h2F">Carolla</h1>
              <h1 className="h2F">Suzuki</h1>
            </div>
            <div className="button ml-[8%] flex justify-start items-center ">
              <button className="p-2 text-white font-[400] text-  xl bg-[#ffffff00] rounded-md px-6 flex items-center justify-center gap-x-3 border-zinc-100 border-[1px]">
                Explore
                <span className="inline-flex">
                  <GoArrowRight size={"1.1rem"} />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 right w-[50%] ">
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
            <div className="w-[120px] h-[90px] overflow-hidden">
              {FuelType.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[120px] h-[90px] bg-[#ffffff31] text-white rounded-md flex flex-col justify-center items-center p-2"
                  >
                    <BsFillFuelPumpFill />
                    <p className="mt-3 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-[120px] h-[90px] overflow-hidden">
              {Transmission.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[120px] h-[90px] bg-[#ffffff31] text-white rounded-md flex flex-col justify-center items-center p-2"
                  >
                    <GiGearStick />
                    <p className="mt-3 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="w-[120px] h-[90px] overflow-hidden">
              {Horsepower.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[120px] h-[90px] bg-[#ffffff31] text-white rounded-md flex flex-col justify-center items-center p-2"
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
