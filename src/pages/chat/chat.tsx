import Image from "next/image";
import React, { useState } from "react";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import ChatBody from "../components/chatBody";

export default function Chat() {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="flex h-screen justify-center flex-col items-center">
      {user ? (
        <div className="flex gap-10">
          <>
            <ChatBody signOut={signOut} />
          </>
        </div>
      ) : (
        <button>
          <div onClick={googleSignIn} className="flex justify-center">
            <Image
              src="/images/google-icon.png"
              width={150}
              height={150}
              alt="google sign in"
            />
          </div>
        </button>
      )}
    </div>
  );
}
