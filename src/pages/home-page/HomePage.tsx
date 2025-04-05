import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button"; // ایمپورت کامپوننت Button

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">به صفحه‌ی اصلی خوش آمدید</h1>
      <div className="space-x-4">
        <Button
          text="ورود"
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        />
        <Button
          text="ثبت نام"
          onClick={() => navigate("/register")}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        />
      </div>
    </div>
  );
};

export default HomePage;
