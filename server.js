const fs = require('fs'); // เพิ่มบรรทัดนี้
const express = require("express");
const axios = require("axios");
const xlsx = require("xlsx");
const dotenv = require("dotenv");
const cors = require("cors");
const https = require('https');


dotenv.config();

const app = express();
const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/odos.thaigov.go.th/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/odos.thaigov.go.th/privkey.pem')
};
// ใช้ JSON Parser และ CORS
app.use(express.json());

// การตั้งค่า CORS
app.use(
  cors({
    origin: ['http://127.0.0.1:3000', 'https://odos.thaigov.go.th'], // อนุญาตเฉพาะแหล่งกำเนิดที่ระบุ
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // วิธี HTTP ที่อนุญาต
    allowedHeaders: ['Content-Type', 'Authorization'], // เฮดเดอร์ที่อนุญาต
    credentials: true, // อนุญาตให้ส่ง cookies/credentials
  })
);

// Environment Variables
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const TENANT_ID = process.env.TENANT_ID;
const SITE_ID = process.env.SITE_ID; // Site ID
const ITEM_ID = process.env.ITEM_ID; // Item ID (File ID ใน SharePoint)
const PORT = process.env.PORT || 3000;

// ฟังก์ชันสำหรับรับ Access Token
async function getAccessToken() {
  const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
  const data = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    scope: "https://graph.microsoft.com/.default",
  });

  try {
    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw new Error("Unable to get access token");
  }
}

// ฟังก์ชันสำหรับดึงข้อมูลจาก OneDrive
async function getExcelFromOneDrive(siteId, itemId, accessToken) {
  const url = `https://graph.microsoft.com/v1.0/sites/${siteId}/drive/items/${itemId}/content`;

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      responseType: "arraybuffer",
    });

    const workbook = xlsx.read(response.data, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    return data;
  } catch (error) {
    console.error("Error getting Excel file from OneDrive:", error);
    throw new Error("Unable to fetch Excel file");
  }
}

// API สำหรับดึงข้อมูลทั้งหมด
app.get("/api/data", async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const data = await getExcelFromOneDrive(SITE_ID, ITEM_ID, accessToken);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API สำหรับค้นหาข้อมูลด้วย ID
app.get("/api/search", async (req, res) => {
  const { searchId } = req.query; // ใช้ req.query แทน req.body

  if (!searchId || !/^S\d+$/.test(searchId)) {
    return res.status(400).json({ error: "กรุณากรอก ID ที่มีตัวอักษร 'S' ตามด้วยตัวเลข" });
  }

  try {
    const accessToken = await getAccessToken();
    const data = await getExcelFromOneDrive(SITE_ID, ITEM_ID, accessToken);

    const searchResult = data.filter((row) => row.Application_id === searchId);
    res.json(searchResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// เริ่มเซิร์ฟเวอร์
// ตั้งค่าให้ server ทำงานผ่าน HTTPS
https.createServer(options, app).listen(3000, () => {
  console.log('Backend server running on https://localhost:3000');
});
