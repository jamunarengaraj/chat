import React, { useState } from "react";
import Chats from "./Chats";
import RoundedBtn from "./Common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiFilter } from "react-icons/bi";
import { pp } from "../assets/whatsapp";
import { MdSearch, MdSend } from "react-icons/md";
import {
  cs1,
  cs2,
  chat3,
  chat4,
  chat5,
  chat6,
  chat7,
} from "../assets/whatsapp";
function LeftMenu() {
  const [filter, setFilter] = useState(false);

  return (
    // LeftMenu container
    <>
      <div class="h-96 overflow-y-auto">
        <div class="p-2"> Chat History</div>
        <div class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 text-sm bg-[#f0faf9] m-2 shadow rounded-xl">
          <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
            {/* <img
                  src={chat3}
                  alt="profile_picture"
                  className="rounded-full w-[25px] h-[25px] "
                /> */}

            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
        
            >
              <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z" />
              <path d="M7 7h10v2H7zm0 4h7v2H7z" />
            </svg>
          </div>
          <div class="ml-2 text-sm font-semibold ">Lorem, ipsum dolor sit </div>
        </div>
        <div class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 text-sm bg-[#f0faf9] m-2 shadow rounded-xl">
          <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
          <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
        
            >
              <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z" />
              <path d="M7 7h10v2H7zm0 4h7v2H7z" />
            </svg>
          </div>
          <div class="ml-2 text-sm font-semibold"> accusamus sequi commodi  </div>
          {/* <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                  4 
                  </div> */}
        </div>
        <div class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 text-sm bg-[#f0faf9] m-2 shadow rounded-xl">
          <div class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
          <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
        
            >
              <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z" />
              <path d="M7 7h10v2H7zm0 4h7v2H7z" />
            </svg>
          </div>
          <div class="ml-2 text-sm font-semibold"> dolore repudiandae officiis </div>
        </div>
        <div class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 text-sm bg-[#f0faf9] m-2 shadow rounded-xl">
          <div class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
          <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
        
            >
              <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z" />
              <path d="M7 7h10v2H7zm0 4h7v2H7z" />
            </svg>
          </div>
          <div class="ml-2 text-sm font-semibold"> adipisicing elit quos nesciunt.</div>
        </div>
        <div class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 text-sm bg-[#f0faf9] m-2 shadow rounded-xl">
          <div class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
          <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
        
            >
              <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z" />
              <path d="M7 7h10v2H7zm0 4h7v2H7z" />
            </svg>
          </div>
          <div class="ml-2 text-sm font-semibold">dolore repudiandae officiis </div>
        </div>
        <div class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 text-sm bg-[#f0faf9] m-2 shadow rounded-xl">
          <div class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
          <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
        
            >
              <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z" />
              <path d="M7 7h10v2H7zm0 4h7v2H7z" />
            </svg>
          </div>
          <div class="ml-2 text-sm font-semibold"> adipisicing elit quos nesciunt.</div>
        </div>
        <div class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2 text-sm bg-[#f0faf9] m-2 shadow rounded-xl">
          <div class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full">
          <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
        
            >
              <path d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414 15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586 9.414 16H5V4h14v12z" />
              <path d="M7 7h10v2H7zm0 4h7v2H7z" />
            </svg>
          </div>
          <div class="ml-2 text-sm font-semibold">dolore repudiandae officiis nemo sint,</div>
        </div>
      </div>
    </>
  );
}

export default LeftMenu;
