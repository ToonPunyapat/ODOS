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
import { ThemeProvider } from "./components/ThemeContext";


function App() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
      e.preventDefault();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
      event.preventDefault();
    }
  });
  return (
    <ThemeProvider>
      <div className="Sukhumvit">
        <Navbar />
        <ScrollToTop />
        <div
          className="grid grid-rows-8"
          style={{
            gridTemplateRows: "650px auto auto auto auto auto auto auto",
          }}
        >
          <div className="flex flex-col justify-center items-center bg-cover bg-center bg-[white] dark:bg-[black] /bg-[url('/images/fc0003_40702826139d468fbc3f3271bd57352d~mv2.avif')]">
            <Title />
          </div>
          <div className="justify-items-center place-content-center bg-[white] dark:bg-[black] px-4 py-10">
            <Highlight />
          </div>
          <div className="flex flex-col justify-center items-center bg-[white] dark:bg-[black] text-center py-10 sm:py-12 md:py-16">
            <Enroll />
          </div>
          <div className="h-full w-full flex justify-center">
            <Timeline />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 bg-[white] dark:bg-[black]">
            <Detail />
            {/* <div className="hidden lg:block bg-[url('/images/istockphoto-1358014313-612x612.jpg')] bg-cover bg-center"></div> */}
          </div>
          <div className="grid grid-cols-1 bg-[white] dark:bg-[black] place-content-center justify-items-center">
            <File />
          </div>
          <div className="grid grid-cols-1 bg-[white] dark:bg-[black] place-content-center justify-items-center">
            {/* <Sponsors /> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[white] dark:bg-[black]">
            <ContactUs />
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
