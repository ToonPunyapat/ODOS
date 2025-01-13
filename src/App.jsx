import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
      event.preventDefault();
    }
  });
  return (
    <div className="Sukhumvit">
      <Navbar />
      <div className="grid grid-rows-8 md:grid-rows-none md:grid-cols-1" style={{ gridTemplateRows: "737px 600px 400px auto 20px auto 450px 350px", }}>
        <div className="flex flex-col justify-center items-center bg-cover bg-center bg-[url('D:\toon\ODOS\src\images\fc0003_40702826139d468fbc3f3271bd57352d~mv2.avif')]">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFF200] mb-2 text-center">
            หนึ่งอำเภอหนึ่งทุน ซัมเมอร์แคมป์
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            <span className="text-[#FFF200]">O</span>
            <span className="text-white">ne{" "}</span>
            <span className="text-[#FFF200]">D</span><span className="text-white">istrict{" "}</span>
            <span className="text-[#FFF200]">O</span><span className="text-white">ne{" "}</span>
            <span className="text-[#FFF200]">S</span><span className="text-white">cholarship</span>
          </p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
          <span className="text-[#FFF200]">S</span>
          <span className="text-white">ummer{" "}</span>
          <span className="text-[#FFF200]">C</span>
          <span className="text-white">amp{" "}</span>
          </p>
          <p className="text-lg md:text-2xl lg:text-3xl max-w-md md:max-w-lg lg:max-w-4xl leading-relaxed mt-7 text-white mb-10 text-left indent-8 px-4">
          โครงการ “หนึ่งอำเภอ หนึ่งทุน Summer Camp” เพื่อสร้างโอกาสทางการศึกษาที่เท่าเทียมกันให้แก่เยาวชนไทยทุกคน จากทุกอำเภอ ทั่วประเทศไทย โดยเฉพาะในพื้นที่ห่างไกล รวมถึงกรุงเทพมหานคร ผ่านการมอบทุนการศึกษาเพื่อไปศึกษาเรียนรู้เทคโนโลยีดิจิทัลที่ทันสมัยในต่างประเทศ พร้อมทั้งเปิดประสบการณ์ในการทำงานจริงในบริษัทชั้นนำระดับโลก และเยี่ยมชมบริษัทเทคโนโลยีชั้นนำในต่างประเทศ เพื่อให้เยาวชนเหล่านี้ได้มีทักษะดิจิทัล ตลอดสามารถนำความรู้และทักษะที่ได้รับกลับมาพัฒนาประเทศ
          </p>
        </div>
        <div className="justify-items-center place-content-center bg-[#FFF200] px-4 py-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center">สร้างโอกาสให้เยาวชนไทย</p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-10  mt-10">
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">รู้จริง</p>
              <p className="text-base md:text-lg lg:text-2xl text-center max-w-48">
                ประสบการณ์จริงจากการเยี่ยมชมบริษัทเทคโนโลยีระดับโลก
                และการใช้ชีวิตรูปแบบใหม่ในต่างประเทศ
              </p>
            </div>
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">ทั่วถึง</p>
              <p className="max-w-48 text-base md:text-lg lg:text-2xl text-center">
                เปิดโอกาสให้เยาวชนในทุกอำเภอทั่วประเทศ
                รวมถึงในกรุงเทพมหานครมีสิทธิเข้าร่วมโครงการ
              </p>
            </div>
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">เท่าเทียม</p>
              <p className="max-w-48 text-base md:text-lg lg:text-2xl text-center">
                เยาวชนที่มีคุณสมบัติครบถ้วนทุกคนมีโอกาสที่เท่าเทียมกันที่จะได้รับการคัดเลือกเข้าร่วมโครงการ
              </p>
            </div>
            <div>
              <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6">เท่ากัน</p>
              <p className="max-w-48 text-base md:text-lg lg:text-2xl text-center ">ประสบการณ์จากการเข้าร่วมโครงการทำให้เยาวชนเข้าใจและเท่าทันการเปลี่ยนแปลงและการพัฒนาเทคโนโลยีดิจิทัลในระดับโลก</p></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#0B293B] text-center py-10 sm:py-12 md:py-16">
          <p className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 md:mb-10 text-white">
            Summer Camp Is <span className="text-[#FFF200]">Now Open!</span>
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-white">Coming Soon On 1 March 2025</p>
          <a
            className="bg-white text-gray-900 rounded-3xl border border-gray-200 px-6 py-2 text-sm sm:text-base md:text-lg hover:bg-gray-100 hover:text-black transition-all"
            // href="https://forms.office.com/r/XyiAbvu3LC?origin=lprLink"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Enroll (Coming Soon)
          </a>
        </div>
        <div className="h-screen w-full">
          <div className="bg-[url('D:/toon/ODOS/src/images/messageImage_1736408704793.jpg')] bg-cover bg-center w-full h-screen max-h-screen hidden sm:block md:block lg:block"></div>
          <div className="bg-[url('D:\toon\ODOS\src\images\odos_timeline_1.png')] bg-cover bg-center h-full w-full sm:hidden"></div>
        </div>
        <div className="bg-[#0B293B]"></div>
        <div className="h-screen w-full">
          <div className="bg-[url('D:\toon\ODOS\src\images\messageImage_1736408714509.jpg')] bg-cover bg-center h-full w-full hidden sm:block"></div>
          <div className="bg-[url('D:\toon\ODOS\src\images\odos_timeline_2.png')] bg-cover bg-center h-full w-full sm:hidden"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center place-content-center bg-[#0B293B] text-center py-10 sm:py-12 md:py-16 px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl text-[#FFF200] font-bold">
              รายละเอียดโครงการ
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white text-left mt-6 sm:mt-8 md:mt-10 max-w-md sm:max-w-lg md:max-w-2xl leading-relaxed indent-8">
            โครงการ “หนึ่งอำเภอ หนึ่งทุน Summer Camp” เพื่อสร้างโอกาสทางการศึกษาที่เท่าเทียมกันให้แก่เยาวชนไทยทุกคน จากทุกอำเภอ ทั่วประเทศไทย โดยเฉพาะในพื้นที่ห่างไกล รวมถึงกรุงเทพมหานคร ผ่านการมอบทุนการศึกษาเพื่อไปศึกษาเรียนรู้เทคโนโลยีดิจิทัลที่ทันสมัยในต่างประเทศ พร้อมทั้งเปิดประสบการณ์ในการทำงานจริงในบริษัทชั้นนำระดับโลก และเยี่ยมชมบริษัทเทคโนโลยีชั้นนำในต่างประเทศ เพื่อให้เยาวชนเหล่านี้ได้มีทักษะดิจิทัล ตลอดสามารถนำความรู้และทักษะที่ได้รับกลับมาพัฒนาประเทศ
            </p>
          </div>
          <div className="hidden lg:block bg-[url('D:\\toon\\ODOS\\src\\images\\istockphoto-1358014313-612x612.jpg')] bg-cover bg-center"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#FFF200]">
          <div className="grid justify-items-start place-content-center px-4 py-6">
            <p className="text-4xl font-bold">Contact Us</p>
            <p className="mt-5 text-xl">สำนักเลขาธิการนายกรัฐมนตรี ทำเนียบรัฐบาล</p>
            <p className="text-xl">ที่ตั้ง: เลขที่ 1 ถนนนครปฐม เขตดุสิต กรุงเทพฯ 10300</p>
            <br />
            {/* <p>โทร 02 280 9000</p> */}
            {/* <p>โทรสาร 02 280 9046</p> */}
            {/* <p>email: dsp@depa.or.th</p> */}
            <p className="text-lg">เว็บไซต์นี้สร้างโดย สำนักงานส่งเสริมเศรษฐกิจดิจิทัล</p>
            <p className="text-lg">Email: depathailand@depa.or.th</p>
            <p className="text-lg">ที่ตั้ง: 234/431 ถนนลาดพร้าว ซอยลาดพร้าว 10 </p>
            <p className="text-lg">แขวงจอมพล เขตจตุจักร กรุงเทพมหานคร 10900 </p>
            {/* <p className="text-md">Tel: </p> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
