import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkstatus from "./pages/Checkstatus.jsx";
import App from "./App.jsx";
import Captcha from "./pages/Captcha.jsx";
import List from "./pages/List.jsx";
import './index.css';


const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* เส้นทางหน้าแรก */}
          <Route path="/" element={<App />} />
        <Route path="/list" element={<List />} />
  {/* <Maintenance /> */}
        {/* เส้นทางที่ต้องตรวจสอบ CAPTCHA */}
        <Route
          path="/check-status"
          element={
            <Captcha>
              <Checkstatus />
            </Captcha>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
