import React from "react";

function Chat({ pp, contact, msg, time, unreadMsgs, active }) {
  return (
    // Chat container
    <div
      className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px-3  ${
        active ? "bg-[#fff]" : ""
      }`}
    >
      {/* Profile picture */}

      {/* Info container */}
      <div className="flex justify-between  w-100 h-100 py-3 rounded-full m-3 ">
        {/* Contact name and message */}
        <div
          class="flex justify-center   w-100  p-3 "
          style={{ backgroundColor: "#daebea", borderRadius: "10px" }}
        >
          {/* Contact name */}
          {/* <h1 className="font-medium mb-1">{contact}</h1> */}

          {/* Message */}
          <div>
            <img
              src={pp}
              alt="profile_picture"
              className="rounded-full w-[40px] mr-5"
            />
          </div>
          <div>
            <p className={`text-sm ${!unreadMsgs ? "text-neutral-400" : ""}`}>
              {msg}
            </p>
          </div>
        </div>

        {/* Time and number of messages*/}
        <div className="flex flex-col justify-between items-end h-100 text-xs">
          {/* Time */}
          <p className="text-emerald-500 min-w-[55px]">{time}</p>

          {/* Number of messages */}
          {unreadMsgs && (
            <div className="flex justify-center items-center bg-emerald-500 rounded-full w-[20px] h-[20px]">
              <p className="text-emerald-900">{unreadMsgs}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
