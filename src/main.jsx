import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkstatus from "./components/Checkstatus.jsx";
import App from "./App.jsx";
import CaptchaAndRoute from "./components/CaptchaAndRoute.jsx";
import './index.css';
import Teststatus from "./components/Teststatus.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* เส้นทางหน้าแรก */}
          <Route path="/" element={<App />} />
        {/* <Route path="/test" element={<CheckstatusTest />} /> */}
        <Route path="/list" element={<Teststatus />} />

        {/* เส้นทางที่ต้องตรวจสอบ CAPTCHA */}
        <Route
          path="/check-status"
          element={
            <CaptchaAndRoute>
              <Checkstatus />
            </CaptchaAndRoute>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
