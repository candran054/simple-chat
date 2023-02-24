import React, { useEffect, useState } from "react";
import ChatBubble from "./chatBubble";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  CollectionReference,
} from "firebase/firestore";
import { db } from "@/firebase";
import SendMessage from "./sendMessage";

type Message = {
  id: string;
  text: string;
  createdAt: { seconds: number; nanoseconds: number };
  avatar: string;
  userId: string;
};

export default function MessageBox() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query<Message>(
      collection(db, "messages") as CollectionReference<Message>,
      orderBy("createdAt"),
      limit(50)
    );

    const unsubscribe = onSnapshot<Message>(q, (QuerySnapshot) => {
      let messages: Message[] = [];
      QuerySnapshot.forEach((doc: any) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="overflow-auto">
      {messages.map((message) => (
        <ChatBubble key={message.id} message={message} />
      ))}
      <SendMessage />
    </div>
  );
}
