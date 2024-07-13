import React from 'react'
import Image from 'next/image';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
const FeedCard: React.FC = () => {
    return (
      <div className="border border-gray-600 p-5 border-b-0 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-1">
            <Image
              src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
              alt="user"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="col-span-11">
            <h5>Sadhu Vignesh</h5>
            <p>
              any second year student want to do internship (PAID) 1. should
              have good communication skills 2. basic excel knowledge 3. should
              know content writing Please let me know in comments.
            </p>
            <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
              <div>
                <BiMessageRounded />
              </div>
              <div>
                <FaRetweet />
              </div>
              <div>
                <AiOutlineHeart />
              </div>
              <div>
                <BiUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default FeedCard