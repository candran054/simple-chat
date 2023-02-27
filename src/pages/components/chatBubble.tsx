import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import Image from "next/image";
import { deleteDoc, doc } from "firebase/firestore";

interface Props {
  message: any;
  messageId: string;
}

export default function ChatBubble({ message }: Props) {
  const [user] = useAuthState(auth);

  const handleDelete = async () => {
    if (user && message?.uid === user.uid) {
      try {
        await deleteDoc(doc(db, "messages", message.id));
      } catch (error) {
        console.error("Error deleting message: ", error);
      }
    } else {
      console.log("You are not authorized to delete this message");
    }
  };

  return (
    <div
      className={`flex py-3 px-5 ${
        user && message?.uid === user?.uid ? "justify-end" : ""
      } `}
    >
      <div
        className={`flex gap-2 items-center ${
          user && message?.uid === user?.uid ? "flex-row-reverse" : ""
        }`}
      >
        {message?.avatar && (
          <Image
            className="rounded-full"
            src={message.avatar}
            width={50}
            height={50}
            alt="avatar"
          />
        )}
        <div
          className={`px-3 py-2 ${
            user && message?.uid === user?.uid ? "bg-[#DCF8C6]" : "bg-white"
          } rounded-lg`}
        >
          <p className="font-bold">{message?.name}</p>
          <p className="m-0 text-sm text-left">{message?.text}</p>
        </div>
        <button
          onClick={handleDelete}
          className="bg-white text-red-400 font-bold rounded-lg px-1 py-1"
        >
          delete
        </button>
      </div>
    </div>
  );
}
