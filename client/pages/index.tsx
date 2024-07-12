import Image from "next/image";
import { Inter } from "next/font/google";
import {BsTwitter} from "react-icons/bs"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-48 bg-black">
      <div className="col-span-3 flex justify-start">
        <BsTwitter color="white" className="text-3xl hover:bg-teal-300 rounded-full"/>
      </div>
      <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-slate-200"></div>
      <div className="col-span-3"></div>
    </div>
  );
}
