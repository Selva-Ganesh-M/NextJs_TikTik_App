import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [isSSR, setIsSSR] = useState<boolean>(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if (isSSR) return null;

  return (
    <SessionProvider session={session}>
      <div>
        <Navbar />
        <div className="flex gap-6 md:gap-20">
          <div className="overflow-hidden xl:hover:overflow-auto h-[92vh]">
            <Sidebar />
          </div>
          <div className="flex flex-col mt-4 gap-10 h-[88vh]">
            <Component {...pageProps} />;
          </div>
        </div>
      </div>
    </SessionProvider>
  );
};

export default App;
