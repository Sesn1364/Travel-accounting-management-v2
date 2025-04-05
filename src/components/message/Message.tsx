// src/components/message/Message.tsx

import { MessageProps } from "../../types/MessageProps";
  
  const Message = ({ message, type = "error", className = "" }: MessageProps) => {
    const messageClass = type === "error" ? "text-red-500" : "text-green-500";
    return message ? (
      <p className={`${messageClass} mt-2 ${className}`}>{message}</p>
    ) : null;
  };
  
  export default Message;
  