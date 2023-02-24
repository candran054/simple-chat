import React from "react";
import MessageBox from "./messageBox";
import SendMessage from "./sendMessage";

interface Authenticate {
  signOut: any;
  avatar?: any;
}

export default function ChatBody({ signOut, avatar }: Authenticate) {
  const DUMMY = [
    {
      text: "Hello, how are you?",
      isSender: true,
    },
    {
      text: "Not your business biatch",
      isSender: false,
    },
    {
      text: "dude, what crawled up your ass ?",
      isSender: true,
    },
    {
      text: "wanna fight you twat",
      isSender: false,
    },
  ];

  return (
    <div className="h-screen w-[418px] px-5 py-5 flex flex-col bg-blue-600">
      <div className="flex items-center gap-2 text-white border-b border-solid border-white pb-2">
        <div className="flex justify-center items-center text-black bg-white font-bold rounded-3xl w-12 h-10">
          I
        </div>
        <div className="flex w-full justify-between">
          <p className="font-bold">The Snitch</p>
          <p className="font-bold cursor-pointer" onClick={signOut}>
            Sign Out
          </p>
        </div>
      </div>
      <MessageBox />
      <SendMessage />
    </div>
  );
}
