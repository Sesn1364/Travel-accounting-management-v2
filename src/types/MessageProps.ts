export interface MessageProps {
    message: string;
    type?: "error" | "success";
    className?: string; // اضافه کردن className برای سفارشی‌سازی بیشتر
  }