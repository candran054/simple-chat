import React, { useState } from "react";
import { auth, db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Image from "next/image";

export default function SendMessage() {
  const [message, setMessage] = useState("");

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    if (message.trim() === "") {
      return;
    }
    const user = auth.currentUser;
    if (!user) {
      console.log("user is not logged in");
      return;
    }
    const { uid, displayName, photoURL } = user;
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document ", error);
    }
  };

  return (
    <div className="px-5 translate-y-3">
      <div className="flex justify-center rounded-lg py-2 mb-2 bg-white">
        <form onSubmit={sendMessage}>
          <label htmlFor="messageInput" />
          <div className="flex">
            <input
              className="w-[280px]"
              id="messageInput"
              name="messageInput"
              type="text"
              placeholder="type message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-center bg-red-500 rounded-3xl w-8 h-8 cursor-pointer">
              <Image
                src="/svg/send-icon.svg"
                width={18}
                height={18}
                alt="send message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
