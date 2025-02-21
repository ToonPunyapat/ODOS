import { Toaster, toast } from "react-hot-toast";
import { ArrowLeft, Copy } from "lucide-react";
import { Link } from "react-router-dom";

const List = () => {
  const applications = [
    { id: "S120006622", status: "ไม่ผ่าน" },
    { id: "S100006833", status: "รอการพิจารณา" },
    { id: "S120006966", status: "ผ่านการพิจารณารอบที่ 1" },
    { id: "S120007063", status: "ผ่านการพิจารณารอบที่ 2" },
    { id: "S120007168", status: "รอสัมภาษณ์" },
    { id: "S520007262", status: "ผ่านการสัมภาษณ์" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "ไม่ผ่าน":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      case "รอการพิจารณา":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "ผ่านการพิจารณารอบที่ 1":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "ผ่านการพิจารณารอบที่ 2":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-100";
      case "รอสัมภาษณ์":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100";
      case "ผ่านการสัมภาษณ์":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success("คัดลอกรหัสเรียบร้อยแล้ว!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 ">
      <Toaster />
      <div className="max-w-4xl mx-auto mt-10">
        <Link
          to="/check-status"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          กลับไปยังหน้าเช็คสถานะ
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">สถานะการสมัคร</h1>

        <div className="grid gap-4">
          {applications.map((app) => (
            <div
              key={app.id}
              onClick={() => handleCopy(app.id)} // เพิ่มฟังก์ชันคัดลอกที่นี่
              className="rounded-lg border bg-white text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-700">
                      {app.id}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // ป้องกันไม่ให้คลิกปุ่มแล้วคัดลอกซ้ำ
                        handleCopy(app.id);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-ls font-semibold ${getStatusColor(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
