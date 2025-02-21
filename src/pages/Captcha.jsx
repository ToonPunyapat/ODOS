import { useEffect, useState } from "react";

const CaptchaAndRoute = ({ children }) => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(() => {
    const storedValue = localStorage.getItem("captchaPassed");
    return storedValue === "false"; // เช็คค่าเริ่มต้นจาก localStorage
  });
  const [captchaRendered, setCaptchaRendered] = useState(false);

  useEffect(() => {
    // รีเซ็ต CAPTCHA ทุกครั้งที่รีเฟรชหน้า
    localStorage.setItem("captchaPassed", "true");

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
          setCaptchaRendered(false); // รีเซ็ตให้ CAPTCHA แสดงใหม่
        },
      });

      setCaptchaRendered(true);
    }
  }, [captchaPassed, captchaRendered]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      setCaptchaPassed(true);
      localStorage.setItem("captchaPassed", "true");
    } else {
      alert(
        "เนื่องจาก Token สำหรับยืนยันตัวตนหมดอายุ\nโปรดกด OK เพื่อรีโหลดใหม่"
      );
      setCaptchaRendered(false); // รีเซ็ตเพื่อให้ render ใหม่
    }
  };

  if (!captchaPassed) {
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

  return <>{children}</>;
};

export default CaptchaAndRoute;
