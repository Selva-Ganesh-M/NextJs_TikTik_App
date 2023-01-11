import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import GoogleSignInButton from "./utils/GoogleSignInButton";

type Props = {};

const Sidebar = (props: Props) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const normalLink =
    "flex items-center justify-center gap-3 hover:bg-primary p-3 cursor-pointer font-semibold text-[#F51997] rounded xl:justify-start";
  const { data: session } = useSession();
  let google_signInOut;
  if (session) {
    google_signInOut = (
      <GoogleSignInButton
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/" })
        }
        content="Sign In with Google"
      />
    );
  } else {
    google_signInOut = (
      <GoogleSignInButton
        onClick={() => signOut()}
        content="Sign Out with Google"
      />
    );
  }

  return (
    // SIDE BAR
    <div>
      {/* Sidebar - Toggler */}

      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSideBar((prev: boolean) => !prev)}
      >
        {showSideBar ? (
          <ImCancelCircle className="cursor-pointer" />
        ) : (
          <AiOutlineMenu className="cursor-pointer" />
        )}
      </div>
      {/* Sidebar - Toggler(E)*/}

      {/* MENU ITEMS */}

      {showSideBar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          {/* Home Icon */}
          <div className="border-gray-200 xl:border-b-2 xl:pb-4">
            <Link href={"/"}>
              <div className={normalLink}>
                <p>
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>
          {/* Home Icon - (E) */}

          {/* Login DIV */}
          <div className="hidden xl:block w-[100%]">{google_signInOut}</div>
          {/* Login DIV(E) */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
