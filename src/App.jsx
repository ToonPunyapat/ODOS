import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";
import Title from "./components/Title";
import Highlight from "./components/Highlight";
import Enroll from "./components/Enroll";
import Timeline from "./components/Timeline";
import Detail from "./components/Detail";
import ContactUs from "./components/ContactUs";
import File from "./components/File";
import ScrollToTop from "./components/ScrollToTop";
import Region from "./components/Region";
import ImageScroll from "./components/ImageScroll";

function App() {
  return (
    <div className="Sukhumvit">
      <Navbar />
      <ScrollToTop />
      <div
        className="grid grid-rows-10"
        style={{
          gridTemplateRows:
            "auto auto 670px auto auto auto auto auto auto auto",
        }}
      >
        <div>
          <ImageScroll />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#e8f3ff]">
          <Region />
        </div>
        <div className="flex flex-col justify-center items-center bg-cover bg-center bg-[#e8f3ff]">
          <Title />
        </div>
        <div className="justify-items-center place-content-center bg-[#e8f3ff] px-4 py-10">
          <Highlight />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#e8f3ff] text-center py-10 sm:py-12 md:py-16">
          <Enroll />
        </div>
        <div className="h-full w-full flex justify-center">
          <Timeline />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 bg-[#e8f3ff] ">
          <Detail />
        </div>
        <div className="grid grid-cols-1 bg-[#e8f3ff] place-content-center justify-items-center">
          <File />
        </div>
        <div className="grid grid-cols-1 bg-[#e8f3ff] place-content-center justify-items-center">
          <Sponsors />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#e8f3ff]">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
