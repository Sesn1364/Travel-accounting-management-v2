// src/utils/formUtils.ts
export const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { name, value } = e.target;
    if (name === "nationalCode" && value.length > 10) return;
    if (name === "phoneNumber" && value.length > 11) return;
    setFormData({ ...formData, [name]: value });
  };
  