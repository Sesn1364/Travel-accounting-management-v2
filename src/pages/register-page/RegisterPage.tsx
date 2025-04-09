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
  const users = useFetchUsers();
  const { formData, setFormData, resetForm } = useFormData();

  const handleSubmit = async () => {
    setMessage("");
    const resultMessage = await submitUserData(formData, users);
    setMessage(resultMessage);

    if (resultMessage === "ثبت نام با موفقیت انجام شد") {
      resetForm();
    }
  };

  const inputFields = [
    { type: "text", name: "firstName", placeholder: "نام" },
    { type: "text", name: "lastName", placeholder: "نام خانوادگی" },
    { type: "text", name: "nationalCode", placeholder: "کد ملی", maxLength: 10 },
    { type: "text", name: "phoneNumber", placeholder: "شماره موبایل", maxLength: 11 },
    { type: "email", name: "email", placeholder: "ایمیل" },
    { type: "text", name: "username", placeholder: "نام کاربری" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">صفحه ثبت نام</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        {inputFields.map((field) => (
          <FormInput
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name as keyof typeof formData]}
            onChange={(e) => handleInputChange(e, formData, setFormData)}
            {...(field.maxLength && { maxLength: field.maxLength })}
          />
        ))}
        <Button onClick={handleSubmit} text="ثبت نام" />
        <Message message={message} type={message === "ثبت نام با موفقیت انجام شد" ? "success" : "error"} />
      </div>
    </div>
  );
};


export default RegisterPage;
