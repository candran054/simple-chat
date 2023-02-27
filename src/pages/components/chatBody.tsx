import React from "react";
import MessageBox from "./messageBox";
import SendMessage from "./sendMessage";

interface Authenticate {
  signOut: any;
}

export default function ChatBody({ signOut }: Authenticate) {
  return (
    <div className="h-screen w-full max-w-[418px] py-5 flex flex-col bg-blue-600 overflow-auto">
      <div className="flex items-center gap-2 text-white border-b border-solid border-white px-5 pb-2 ">
        <div className="flex justify-center items-center text-black bg-white font-bold rounded-3xl w-12 h-10 ">
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
