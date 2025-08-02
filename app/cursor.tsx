"use client";

import React, { useRef, useEffect } from "react";

const CustomCursor = () => {
  const cursorSm = useRef<HTMLDivElement | null>(null);
  const cursorLg = useRef<HTMLDivElement | null>(null);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (cursorSm.current) {
        positionRef.current.mouseX = clientX - cursorSm.current.clientWidth / 2;
        positionRef.current.mouseY =
          clientY - cursorSm.current.clientHeight / 2;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX && !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (Math.abs(distanceX) + Math.abs(distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (cursorSm.current && cursorLg.current) {
        cursorSm.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
        cursorLg.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
      }

      positionRef.current.key = requestAnimationFrame(followMouse);
    };

    positionRef.current.key = requestAnimationFrame(followMouse);

    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <>
      <div className="cs-cursor_lg" ref={cursorLg}></div>
      <div className="cs-cursor_sm" ref={cursorSm}></div>
    </>
  );
};

export default CustomCursor;
