import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

interface Props {
  message: any;
}

export default function ChatBubble({ message }: Props) {
  const [user] = useAuthState(auth);
  // console.log(message.uid);

  return (
    <div
      className={`flex py-3 gap-2 ${
        user && message?.uid === user?.uid ? "justify-end" : ""
      } `}
    >
      <div className="flex items-center">
        {message?.avatar && (
          <img
            className="rounded-full"
            src={message.avatar}
            width={50}
            height={50}
            alt="avatar"
          />
        )}
      </div>

      <div
        className={`px-3 py-2 ${
          user && message?.uid === user?.uid ? "bg-[#DCF8C6]" : "bg-white"
        } rounded-lg`}
      >
        <p className="font-bold">{message?.name}</p>
        <p className="m-0 text-sm text-left">{message?.text}</p>
      </div>
    </div>
  );
}
