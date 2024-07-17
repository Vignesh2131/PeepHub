import Image from "next/image";
import { Inter } from "next/font/google";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from "react-icons/bs"
import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import FeedCard from "@/components/FeedCard";
import { useCallback } from "react";

interface TwitterSideBarButton{
  title: string;
  icon : React.ReactNode
}
const sidebarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon:<BiHomeCircle/>
  },
  {
    title: "Explore",
    icon:<BiHash/>
  },
  {
    title: 'Notifications',
    icon:<BsBell/>
  },
  {
    title: 'Messages',
    icon:<BsEnvelope/>
  },
  {
    title: "Bookmarks",
    icon:<BsBookmark/>
  },
  {
    title: "Profile",
    icon:<BiUser/>
  }
]
export default function Home() {
  const handleLoginWithGoogle = useCallback((cred:CredentialResponse) => { }, []);
  return (
    <div className="grid grid-cols-12 h-screen w-screen px-48 text-white">
      <div className="col-span-3 pt-8 ml-20">
        <div className="h-fit w-fit text-2xl hover:bg-gray-600 rounded-full cursor-pointer transition-all p-2">
          <BsTwitter color="white" />
        </div>
        <div className="mt-2 text-xl font-semibold pr-4 h-screen">
          <ul>
            {sidebarMenuItems.map((item) => (
              <li
                key={item.title}
                className="flex gap-2 justify-start items-center hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 px-5">
            <button className="bg-[#1d9bf0] text-lg p-4 font-semibold rounded-full w-full">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6 border-r-[0.2px] border-l-[0.2px] border-slate-200">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3 p-5">
        <div className="p-5 bg-slate-700 rounded-lg">
          <h1 className="my-2">New to Twitter</h1>
          <GoogleLogin onSuccess={(cred) => console.log(cred)}></GoogleLogin>
        </div>
      </div>
    </div>
  );
}
