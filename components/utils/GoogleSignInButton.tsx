import React from "react";
import { FcGoogle } from "react-icons/fc";

type Props = { onClick: any; content: string };

const GoogleSignInButton = ({ onClick, content }: Props) => {
  return (
    <button
      onClick={() => onClick()}
      className="w-full justify-center px-6 py-3 border-2 rounded-lg border-pink-500 text-pink-500 flex gap-6 hover:bg-pink-500 hover:text-white"
    >
      <FcGoogle size={25} />
      {content}
    </button>
  );
};

export default GoogleSignInButton;
