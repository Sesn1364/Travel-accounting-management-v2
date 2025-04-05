// src/hooks/useFormData.ts

import { useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationalCode: "",
    phoneNumber: "",
    email: "",
    username: "",
  });

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      nationalCode: "",
      phoneNumber: "",
      email: "",
      username: "",
    });
  };

  return {
    formData,
    setFormData,
    resetForm,
  };
};

export default useFormData;
