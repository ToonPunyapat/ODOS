import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // document.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // });
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

  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(`Language changed to: ${lang}`);
  };
  return (
    <div className="Sukhumvit">
      <Navbar onLanguageChange={handleLanguageChange} />
      <div
        className="grid grid-rows-6 md:grid-rows-none md:grid-cols-1"
        style={{
          gridTemplateRows:
            window.innerWidth <= 640
              ? "737px 600px 400px auto 400px"
              : "737px 600px 400px auto 400px",
        }}
      >
        <div className="flex flex-col justify-center items-center bg-cover bg-center bg-[url('/images/fc0003_40702826139d468fbc3f3271bd57352d~mv2.avif')]">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFF200] mb-2 text-center">
            {language === "EN" ? "" : "หนึ่งอำเภอหนึ่งทุน "}
            <span className="block sm:inline">
              {language === "EN" ? "" : "ซัมเมอร์แคมป์"}
            </span>
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            <span className="text-[#FFF200]">O</span>
            <span className="text-white">ne </span>
            <span className="text-[#FFF200]">D</span>
            <span className="text-white">istrict </span>
            <span className="text-[#FFF200]">O</span>
            <span className="text-white">ne </span>
            <span className="text-[#FFF200]">S</span>
            <span className="text-white">cholarship</span>
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            <span className="text-[#FFF200]">S</span>
            <span className="text-white">ummer </span>
            <span className="text-[#FFF200]">C</span>
            <span className="text-white">amp </span>
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl max-w-md md:max-w-lg lg:max-w-4xl leading-relaxed mt-7 text-white mb-10 text-left indent-8 px-4">
            {language === "EN"
              ? "The “One District, One Scholarship Summer Camp” project aims to create equal educational opportunities for all Thai youth from every district throughout Thailand, especially in remote areas, including Bangkok, through granting scholarships to study and learn modern digital technologies abroad, as well as gaining real work experience in world-class companies and visiting leading technology companies abroad, so that these youths have digital skills and can bring back the knowledge and skills they have gained to develop the country."
              : "โครงการ “หนึ่งอำเภอ หนึ่งทุน Summer Camp” เพื่อสร้างโอกาสทางการศึกษาที่เท่าเทียมกันให้แก่เยาวชนไทยทุกคนจากทุกอำเภอ ทั่วประเทศไทย โดยเฉพาะในพื้นที่ห่างไกลรวมถึงกรุงเทพมหานครผ่านการมอบทุนการศึกษาเพื่อไปศึกษาเรียนรู้เทคโนโลยีดิจิทัลที่ทันสมัยในต่างประเทศพร้อมทั้งเปิดประสบการณ์ในการทำงานจริงในบริษัทชั้นนำระดับโลกและเยี่ยมชมบริษัทเทคโนโลยีชั้นนำในต่างประเทศเพื่อให้เยาวชนเหล่านี้ได้มีทักษะดิจิทัลตลอดสามารถนำความรู้และทักษะที่ได้รับกลับมาพัฒนาประเทศ"}
          </p>
        </div>
        <div className="justify-items-center place-content-center bg-[#FFF200] px-4 py-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">
            {language === "EN"
              ? "Creating opportunities for Thai youth"
              : "สร้างโอกาสให้เยาวชนไทย"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-10  mt-10">
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">
                {language === "EN" ? "Know the truth" : "รู้จริง"}
              </p>
              <p className="text-base md:text-lg lg:text-2xl text-center max-w-48">
                {language === "EN"
                  ? "Real-world experiences from visiting global technology companies and experiencing new ways of living abroad"
                  : "ประสบการณ์จริงจากการเยี่ยมชมบริษัทเทคโนโลยีระดับโลกและการใช้ชีวิตรูปแบบใหม่ในต่างประเทศ"}
              </p>
            </div>
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">
                {language === "EN" ? "thorough" : "ทั่วถึง"}
              </p>
              <p className="max-w-48 text-base md:text-lg lg:text-2xl text-center">
                {language === "EN"
                  ? "Giving opportunities to youth in every district across the country, including Bangkok, to participate in the project."
                  : "เปิดโอกาสให้เยาวชนในทุกอำเภอทั่วประเทศรวมถึงในกรุงเทพมหานครมีสิทธิเข้าร่วมโครงการ"}
              </p>
            </div>
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">
                {language === "EN" ? "Equal" : "เท่าเทียม"}
              </p>
              <p className="max-w-48 text-base md:text-lg lg:text-2xl text-center">
                {language === "EN"
                  ? "All eligible youth have an equal opportunity to be selected for the program."
                  : "เยาวชนที่มีคุณสมบัติครบถ้วนทุกคนมีโอกาสที่เท่าเทียมกันที่จะได้รับการคัดเลือกเข้าร่วมโครงการ"}
              </p>
            </div>
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">
                {language === "EN" ? "Equal" : "เท่ากัน"}
              </p>
              <p className="max-w-48 text-base md:text-lg lg:text-2xl text-center ">
                {language === "EN"
                  ? "The experience from participating in the project enables the youth to understand and keep up with the changes and developments in digital technology at a global level."
                  : "ประสบการณ์จากการเข้าร่วมโครงการทำให้เยาวชนเข้าใจและเท่าทันการเปลี่ยนแปลงและการพัฒนาเทคโนโลยีดิจิทัลในระดับโลก"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#0B293B] text-center py-10 sm:py-12 md:py-16">
          {/* โค้ดชุดนี้ไว้เปิดใช้ตอนโครงการเปิดรับสมัคร */}
          {/* <p className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-white">
            Summer Camp Is <span className="text-[#FFF200]">Now Open!</span>
          </p> */}
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-white">
            {language === "EN"
              ? "Coming Soon On 1 March 2025"
              : "เร็วๆ นี้ 1 มีนาคม 2568"}
          </p>
          <a
            className="bg-white text-gray-900 rounded-3xl border border-gray-200 px-6 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-100 hover:text-black transition-all"
            // href="https://forms.office.com/r/XyiAbvu3LC?origin=lprLink"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            {language === "EN"
              ? "Enroll (Coming Soon)"
              : "ลงทะเบียน (เร็วๆ นี้)"}
          </a>
        </div>
        <div className="h-full w-full flex justify-center bg-[#FFF200]">
          <div className="hidden sm:block md:block lg:block">
            <img
              src={
                language === "EN"
                  ? "/images/odos_timeline_eng.png"
                  : "/images/odos_timeline_th.png"
              }
              alt="ODOS_Timeline"
            />
          </div>
          <div className="sm:hidden">
            <img
              src={
                language === "EN"
                  ? "/images/odos_timeline_eng_mb.png"
                  : "/images/odos_timeline_th_mb.png"
              }
              alt="ODOS_Timeline"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center place-content-center bg-[#0B293B] text-center py-10 sm:py-12 md:py-16 px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl text-[#FFF200] font-bold">
              {language === "EN" ? "Project details" : "รายละเอียดโครงการ"}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white text-left mt-6 sm:mt-8 md:mt-10 max-w-md sm:max-w-lg md:max-w-2xl leading-relaxed indent-8">
              {language === "EN"
                ? "The “One District, One Scholarship Summer Camp” project aims to create equal educational opportunities for all Thai youth from every district throughout Thailand, especially in remote areas including Bangkok, through granting scholarships to study and learn modern digital technologies abroad, as well as gaining real work experience in world-class companies and visiting leading technology companies abroad so that these youths will have digital skills and be able to bring back the knowledge and skills they have gained to develop the country."
                : "โครงการ “หนึ่งอำเภอ หนึ่งทุน Summer Camp”เพื่อสร้างโอกาสทางการศึกษาที่เท่าเทียมกันให้แก่เยาวชนไทยทุกคนจากทุกอำเภอ ทั่วประเทศไทย โดยเฉพาะในพื้นที่ห่างไกลรวมถึงกรุงเทพมหานครผ่านการมอบทุนการศึกษาเพื่อไปศึกษาเรียนรู้เทคโนโลยีดิจิทัลที่ทันสมัยในต่างประเทศพร้อมทั้งเปิดประสบการณ์ในการทำงานจริงในบริษัทชั้นนำระดับโลกและเยี่ยมชมบริษัทเทคโนโลยีชั้นนำในต่างประเทศเพื่อให้เยาวชนเหล่านี้ได้มีทักษะดิจิทัลตลอดสามารถนำความรู้และทักษะที่ได้รับกลับมาพัฒนาประเทศ"}
            </p>
          </div>
          <div className="hidden lg:block bg-[url('/images/istockphoto-1358014313-612x612.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FFF200]">
          <div className="grid justify-items-start place-content-center px-4 py-6">
            <p className="text-4xl font-bold">
              {language === "EN" ? "Contact Us" : "ติดต่อเรา"}
            </p>
            <p className="mt-5 text-xl">
              {language === "EN"
                ? "Office of the Prime Minister, Government House"
                : "สำนักเลขาธิการนายกรัฐมนตรี ทำเนียบรัฐบาล"}
            </p>
            <p className="text-xl">
              {language === "EN"
                ? "Location: No. 1 Nakhon Pathom Road, Dusit District, Bangkok 10300"
                : "ที่ตั้ง: เลขที่ 1 ถนนนครปฐม เขตดุสิต กรุงเทพฯ 10300"}
            </p>
            <br />
            <div className="text-md">
              <p>
                {language === "EN"
                  ? "This website is created by Digital Economy Promotion Agency."
                  : "เว็บไซต์นี้สร้างโดย สำนักงานส่งเสริมเศรษฐกิจดิจิทัล"}
              </p>
              <p>Email: depathailand@depa.or.th</p>
              <p>
                {language === "EN"
                  ? "Location: 234/431 Lat Phrao Road, Soi Lat Phrao 10"
                  : "ที่ตั้ง: 234/431 ถนนลาดพร้าว ซอยลาดพร้าว 10"}
              </p>
              <p>
                {language === "EN"
                  ? "Chom Phon Subdistrict, Chatuchak District, Bangkok 10900"
                  : "แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
