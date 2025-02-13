import React, { useState, useEffect } from "react";

const images = [
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
  "/images/ODOS.jpg",
];

function ImageScroll() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // เปลี่ยนรูปอัตโนมัติทุก 5 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      {/* รูปภาพที่เปลี่ยน */}
      <div
        className="flex transition-transform duration-700 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-full flex-shrink-0"
            // style={{ height: 670 }}
          />
        ))}
      </div>

      {/* ปุ่มซ้าย-ขวา */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* Indicators (จุดบอกตำแหน่ง) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ImageScroll;
