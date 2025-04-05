// src/utils/apiUtils.ts

import { validateRegisterForm } from "./validateRegisterForm";

// ارسال داده‌ها
export const submitUserData = async (formData: any, users: any[]) => {
  const error = validateRegisterForm(formData, users);
  if (error) {
    return error;
  }

  const newUser = {
    id: Date.now(),
    ...formData,
  };

  try {
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    return "ثبت نام با موفقیت انجام شد";
  } catch {
    return "خطا در ثبت اطلاعات";
  }
};

// دریافت داده‌ها
export const fetchUsers = async () => {
  try {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
