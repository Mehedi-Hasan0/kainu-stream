"use client";

import React, { MutableRefObject } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PerspectiveText from "./PerspectiveText";

const CustomButton = ({
  children,
  hoverColor1 = "bg-lightBlue",
  hoverColor2 = "bg-blue-600",
  hoverColor3 = "bg-gradient-to-r from-purple to-lightBlue",
  btnBgColor = "bg-gradient-to-r from-purple to-lightBlue",
  textColor = "text-white",
  innerEleStyle,
  textLabel,
  ...attributes
}) => {
  const circle = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  let timeoutId = null;
  useEffect(() => {
    if (timeline.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          {
            top: "-145%",
            width: "150%",
            height: "170%",
            duration: 0.4,
            ease: "power3.in",
          },
          "enter"
        )
        .to(
          circle.current,
          { top: "-290%", width: "125%", height: "120%", duration: 0.4 },
          "exit"
        );
    }
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline?.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline?.current?.play();
    }, 300);
  };

  return (
    <div
      className={`rounded-[3em] cursor-pointer relative flex justify-center items-center px-6 py-3 2xl:px-7 2xl:py-3 customButton ${btnBgColor} `}
      style={{ overflow: "hidden" }}
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      {...attributes}
    >
      {
        <PerspectiveText
          label={textLabel}
          textColor={textColor}
          innerEleStyle={innerEleStyle}
        >
          {children}
        </PerspectiveText>
      }

      <div
        ref={circle}
        className="w-full h-[150%] absolute rounded-[50%] top-[102%]"
      >
        <div
          className={`${hoverColor1} w-full h-full rounded-[50%] absolute top-0`}
        />
        <div
          className={`${hoverColor2} w-full h-full rounded-[50%] absolute top-7`}
        />
        <div
          className={`${hoverColor3} w-full h-full rounded-[50%] absolute top-16`}
        />
      </div>
    </div>
  );
};

export default CustomButton;
