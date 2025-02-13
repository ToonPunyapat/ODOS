import { useEffect, useState } from "react";

const CaptchaAndRoute = ({ children }) => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(
    localStorage.getItem("captchaPassed") === "false"
  );
  const [captchaRendered, setCaptchaRendered] = useState(false); // สถานะการแสดง CAPTCHA

  useEffect(() => {
    if (!captchaPassed && window.turnstile && !captchaRendered) {
      
      const captchaContainer = document.getElementById("turnstile-container");
      if (captchaContainer) {
        while (captchaContainer.firstChild) {
          captchaContainer.removeChild(captchaContainer.firstChild);
        }
      }

      // Render CAPTCHA ใหม่
      window.turnstile.render("#turnstile-container", {
        sitekey: "0x4AAAAAAA5w0p24tBkYd5he", // ใส่ Site Key ที่ถูกต้อง
        callback: (token) => {
          if (token) {
            setCaptchaValid(true);
          }
        },
        "error-callback": () => {
          setCaptchaValid(false);
        },
        "expired-callback": () => {
          setCaptchaValid(false);
        },
      });

      setCaptchaRendered(true); // ตั้งค่าว่า CAPTCHA ได้ถูกแสดงแล้ว
    }
  }, [captchaPassed, captchaRendered]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      setCaptchaPassed(true); // อัปเดตสถานะ CAPTCHA
      localStorage.setItem("captchaPassed", "true"); // บันทึกสถานะลง localStorage
    } else {
      alert("เนื่องจาก Token สำหรับยืนยันตัวตนหมดอายุ\nเนื่องจากท่านค้างหน้านี้เป็นระยะเวลานาน โปรดกด OK เพื่อรีโหลดใหม่");
      setCaptchaRendered(false); // รีเซ็ตสถานะ CAPTCHA เพื่อให้ render ใหม่
    }
  };

  if (!captchaPassed) {
    // แสดงหน้า CAPTCHA
    return (
        <div className="flex justify-center items-center h-screen">
  <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
    <h2 className="text-xl font-sukhumvit text-center">
      กรุณาผ่าน CAPTCHA ก่อนเข้าเว็บไซต์
    </h2>
    <div id="turnstile-container" className="mt-4 justify-items-center"></div>
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-lg font-sukhumvit mt-2 ml-[2.6rem] sm:ml-[4.4rem]"
    >
      ยืนยัน
    </button>
  </form>
</div>

      
    );
  }

  // ถ้าผ่าน CAPTCHA แล้ว แสดงเนื้อหา (children)
  return <>{children}</>;
};

export default CaptchaAndRoute;
