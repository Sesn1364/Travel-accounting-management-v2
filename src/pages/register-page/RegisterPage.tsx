// src/pages/RegisterPage.tsx

import { useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import Button from "../../components/button/Button";
import { handleInputChange } from "../../utils/formUtils";
import { submitUserData } from "../../utils/apiUtils"; // ایمپورت از apiUtils
import useFetchUsers from "../../hooks/useFetchUsers"; // ایمپورت هوک سفارشی
import useFormData from "../../hooks/useFormData"; // ایمپورت هوک سفارشی برای مدیریت فرم
import Message from "../../components/message/Message"; // ایمپورت کامپوننت پیام

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const users = useFetchUsers(); // استفاده از هوک سفارشی برای دریافت کاربران
  const { formData, setFormData, resetForm } = useFormData(); // استفاده از هوک سفارشی برای مدیریت فرم

  const handleSubmit = async () => {
    setMessage("");
    const resultMessage = await submitUserData(formData, users);
    setMessage(resultMessage);
    
    if (resultMessage === "ثبت نام با موفقیت انجام شد") {
      resetForm(); // ریست کردن فرم پس از ثبت نام موفق
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">صفحه ثبت نام</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <FormInput
          type="text"
          name="firstName"
          placeholder="نام"
          value={formData.firstName}
          onChange={(e) => handleInputChange(e, formData, setFormData)}
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="نام خانوادگی"
          value={formData.lastName}
          onChange={(e) => handleInputChange(e, formData, setFormData)}
        />
        <FormInput
          type="text"
          name="nationalCode"
          placeholder="کد ملی"
          value={formData.nationalCode}
          onChange={(e) => handleInputChange(e, formData, setFormData)}
          maxLength={10}
        />
        <FormInput
          type="text"
          name="phoneNumber"
          placeholder="شماره موبایل"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange(e, formData, setFormData)}
          maxLength={11}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="ایمیل"
          value={formData.email}
          onChange={(e) => handleInputChange(e, formData, setFormData)}
        />
        <FormInput
          type="text"
          name="username"
          placeholder="نام کاربری"
          value={formData.username}
          onChange={(e) => handleInputChange(e, formData, setFormData)}
        />
        <Button onClick={handleSubmit} text="ثبت نام" />
        <Message message={message} type={message === "ثبت نام با موفقیت انجام شد" ? "success" : "error"}/>
      </div>
    </div>
  );
};

export default RegisterPage;
