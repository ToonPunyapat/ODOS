import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ScrollToTop from "./components/ScrollToTop";
import Region from "./components/Region";
import Button from "./components/Button";
import Declaration from "./components/Declaration";

function App() {
  return (
    <div className="LINESeed">
      <Navbar />
      <ScrollToTop />

      {/* Title Image */}
      <img src="/images/Title.jpg" alt="Title" className="w-full" />

      {/* Region Section */}
      <div className="flex flex-col items-center">
        <img src="/images/BG_1_1.png" alt="Background 1" className="w-full" />
        <div className="bg-[url('/images/BG_1_2.png')] bg-cover w-full">
          <Region />
        </div>
      </div>

      {/* Button Section */}
      <div className="relative flex justify-center">
        <Button />
      </div>

      {/* Declaration Section */}
      <Declaration />

      {/* Timeline Section */}
      <Timeline />

      {/* Partner Image */}
      <img src="/images/Partner.jpg" alt="Partners" className="w-full" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
