import React, { useState } from "react";
import { auth, db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim() === "") {
      alert("Enter valid message");
    }
    const user = auth.currentUser;
    if (!user) {
      console.log("user is not logged in");
      return;
    }
    const { uid, displayName, photoURL } = user;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };

  return (
    <div className="flex justify-center fixed bottom-0 mb-2">
      <form onSubmit={(event) => sendMessage(event)}>
        <label htmlFor="messageInput" />
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          placeholder="type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="px-3" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
