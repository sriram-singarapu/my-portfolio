"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Dynamically import the Carousel component with no server-side rendering
const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  { ssr: false }
);

const FutureReadyComponent = () => {
  const images = [
    { src: "/Achivements/sr-ma.png", alt: "Image 1" },
    { src: "/Achivements/satya-ma.png", alt: "Image 2" },
    { src: "/Achivements/grp-ma.png", alt: "Image 3" },
  ];

  return (
    <>
      <div className="text-center text-xl lg:text-3xl font-bold text-green-600 mb-6 bg-green-100 p-3 rounded-md">
        Activities and achievements
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6">
        {/* Left Section: Text */}
        <div className="flex-1 text-lg leading-relaxed">
          <p>
            Honoured to be selected for the ‘Future Ready Technology Summit,
            2023’ hosted by Microsoft India, where I gained insights into
            Microsoft’s vision for technology-enabled growth, with Satya Nadella
            as the guest of honour.
          </p>
        </div>

        {/* Right Section: Carousel */}
        <div className="flex-1 w-full md:w-1/2">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false} // Optional: Hide slide status text
            showIndicators={true} // Optional: Show indicators
            interval={3000} // Optional: Slide change interval
            axis="horizontal" // Explicitly set required axis prop
          >
            {images.map((image, index) => (
              <div key={index} className="w-full h-64 md:h-80 relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust based on your layout
                  className="object-cover" // Ensures the image covers the entire container
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default FutureReadyComponent;
