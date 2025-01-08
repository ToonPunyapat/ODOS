import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-rows-7">
        <div className="justify-items-center place-content-center">
          <p className="text-6xl font-bold text-[#FFF200] mt-12">
            หนึ่งอำเภอหนึ่งทุน
          </p>
          <p className="text-6xl font-bold">
            <span className="text-[#FFF200]">O</span>
            <span className="text-white">ne{" "}</span>
            <span className="text-[#FFF200]">D</span>istrict{" "}
            <span className="text-[#FFF200]">O</span>ne{" "}
            <span className="text-[#FFF200]">S</span>cholarship
          </p>
          <p className="text-3xl max-w-3xl leading-relaxed mt-10">
            โครงการ ODOS เป็นโครงการหนึ่งอำเภอหนึ่งทุน
            เพื่อพัฒนาการศึกษาของรัฐบาล โดยชื่อเต็มของโครงการนี้คือ
            โครงการทุนการศึกษาระยะสั้นของนักเรียนจากทุกอำเภอ ทั่วประเทศไทย
            รวมถึงกรุงเทพมหานคร
            เพื่อส่งเสริมเยาวชนไทยให้มีโอกาสเรียนรู้ระยะสั้นด้านเทคโนโลยีดิจิทัล
            และเยี่ยมชมบริษัทเทคโนโลยีชั้นนำในต่างประเทศ
          </p>
          <button className="border border-solid border-black rounded-3xl border-1 px-4 py-2 mt-5 mb-5">
            Enroll Now
          </button>
        </div>
        <div className="justify-items-center place-content-center">
          <p className="text-4xl flex justify-items-center align-items-center mt10">สร้างโอกาสให้เยาวชนไทย</p>
          <div className="grid grid-cols-4 gap-36 mt-10">
            <div>
              <p className="text-center text-3xl mb-10">รู้จริง</p>
              <p className="max-w-36 text-2xl text-center">
                ประสบการณ์จริงจากการเยี่ยมชมบริษัทเทคโนโลยีระดับโลก
                และการใช้ชีวิตรูปแบบใหม่ในต่างประเทศ
              </p>
            </div>
            <div>
              <p className="text-center text-3xl mb-10">ทั่วถึง</p>
              <p className="max-w-48 text-2xl text-center">
                เปิดโอกาสให้เยาวชนในทุกอำเภอทั่วประเทศ
                รวมถึงในกรุงเทพมหานครมีสิทธิเข้าร่วมโครงการ
              </p>
            </div>
            <div>
              <p className="text-center text-3xl mb-10">เท่าเทียม</p>
              <p className="max-w-36 text-2xl text-center">
                เยาวชนที่มีคุณสมบัติครบถ้วนทุกคนมีโอกาสที่เท่าเทียมกันที่จะได้รับการคัดเลือกเข้าร่วมโครงการ
              </p>
            </div>
            <div>
              <p className="text-center text-3xl mb-10">เท่ากัน</p>
              <p className="max-w-48 text-2xl text-center">ประสบการณ์จากการเข้าร่วมโครงการทำให้เยาวชนเข้าใจและเท่าทันการเปลี่ยนแปลงและการพัฒนาเทคโนโลยีดิจิทัลในระดับโลก</p></div>
          </div>
        </div>
        <div className="justify-items-center place-content-center">
          <p className="text-4xl">Summer Camp Is <span className="text-[#FFF200]">Now Open!</span></p>
          <button className="border border-solid border-black rounded-3xl border-1 px-4 py-2 mt-8">
            Enroll Now
          </button>
        </div>
        <div>4</div>
        <div>5</div>
        <div className="grid grid-cols-2">
          <div className="justify-items-center place-content-center">
          <p className="text-4xl text-[#FFF200]">รายละเอียดโครงการ</p>
          <p className="max-w-96 text-xl mt-9">โครงการ “หนึ่งอำเภอ หนึ่งทุน” เพื่อให้เด็กไทยได้มีโอกาสเปิดประสบการณ์และเรียนรู้เทคโนโลยีดิจิทัลที่ต่างประเทศ ให้เด็ก ๆ ในทุกอำเภอทั่วประเทศ  สำหรับโครงการดังกล่าวเป็นโครงการที่รัฐบาลมอบทุนการศึกษาให้นักเรียนที่ผ่านการคัดเลือกจากทุกอำเภอ ในระดับอุดมศึกษา ให้มีโอกาสเรียนรู้เทคโนโลยีดิจิทัลและได้ประสบการณ์จริงจากการเยี่ยมชมบริษัทเทคโนโลยีระดับโลก และการใช้ชีวิตรูปแบบใหม่ในต่างประเทศ โดยเงินสนับสนุนจากภาครัฐ</p>
          <button className="border border-solid border-black rounded-3xl border-1 mt-10 px-4 py-2">
            Read More
          </button>
          </div>
        </div>
        <div className="mt-12 ml-12">
          <p className="text-4xl font-bold">Contact Us Now</p>
          <p className="mt-5">สำนักเลขาธิการนายกรัฐมนตรี ทำเนียบรัฐบาล</p>
          <p>ที่ตั้ง: เลขที่ 1 ถนนนครปฐม เขตดุสิต กรุงเทพฯ 10300</p>
          <p>โทร 02 280 9000</p>
          <p>โทรสาร 02 280 9046</p>
          <p>email: dsp@depa.or.th</p>

        </div>
      </div>
    </>
  );
}

export default App;
