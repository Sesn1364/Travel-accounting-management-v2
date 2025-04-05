// src/utils/validateRegisterForm.ts

import { RegisterFormDataProps } from "../types/RegisterFormDataProps";
  
  export const validateRegisterForm = (
    formData: RegisterFormDataProps,
    users: any[]
  ): string | null => {
    const { firstName, lastName, nationalCode, phoneNumber, email, username } = formData;
  
    if (!firstName || !lastName || !nationalCode || !phoneNumber || !email || !username) {
      return "لطفا تمامی فیلدها را مقداردهی نمایید";
    }
  
    if (nationalCode.length !== 10) {
      return "مقدار کد ملی صحیح نیست";
    }
  
    if (!/^09\d{9}$/.test(phoneNumber)) {
      return "مقدار شماره موبایل صحیح نیست";
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "فرمت ایمیل صحیح نیست";
    }
  
    const isDuplicateNationalCode = users.some(user => user.nationalCode === nationalCode);
    const isDuplicatePhoneNumber = users.some(user => user.phoneNumber === phoneNumber);
    const isDuplicateUsername = users.some(user => user.username === username);
  
    if (isDuplicateNationalCode) {
      return "کد ملی وارد شده تکراری است";
    }
    if (isDuplicatePhoneNumber) {
      return "شماره موبایل وارد شده تکراری است";
    }
    if (isDuplicateUsername) {
      return "نام کاربری وارد شده تکراری است";
    }
  
    return null; // یعنی همه‌چیز اوکیه ✅
  };
  