import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

function FestivalCountdown() {
  const [daysLeft, setDaysLeft] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const festivalStartDate = new Date("2024-08-30");
    const currentDate = new Date();
    const timeDifference = festivalStartDate.getTime() - currentDate.getTime();
    const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    setDaysLeft(remainingDays);

    // GSAP animation to count up to the remaining days
    gsap.to(counterRef.current, {
      duration: 4.5,
      innerHTML: remainingDays,
      ease: "power2.out",
      onUpdate: () => {
        counterRef.current.innerHTML = Math.ceil(counterRef.current.innerHTML);
      }
    });
  }, []);

  return (
    <div className="z-10">
     
      <p className="text-9xl text-white font-bold " ref={counterRef}>0</p>
      
    </div>
  );
}

export default FestivalCountdown;
