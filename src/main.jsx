import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // เพิ่ม Router
import OdosPlatform from './components/OdosPlatform.jsx';
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root')); // ใช้ createRoot แค่ครั้งเดียว

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* เส้นทางหน้าแรก */}
        <Route path="/" element={<App />} />
        {/* เส้นทางสำหรับ OdosPlatform */}
        <Route path="/check-status" element={<OdosPlatform />} />
      </Routes>
    </Router>
  </StrictMode>
);
