"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel2: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 30000);
    return () => clearInterval(interval);
  }, [currentIndex,handleNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full  ">
      {/* Adjust the height based on screen size */}
      <div className="relative w-full  sm:h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
        <div className="overflow-hidden h-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="absolute w-full h-full"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              {/* Make image responsive with correct layout */}
              <Image
                alt={`Carousel Image ${currentIndex + 1}`}
                src={images[currentIndex]}
                width={1920} // Larger width to cover bigger screens
                height={1080}
                className="object-cover w-full h-full"
                layout="responsive"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Responsive button styles */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-full z-10 hidden sm:block"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 lg:p-5 rounded-full z-10 hidden sm:block"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Carousel2;
