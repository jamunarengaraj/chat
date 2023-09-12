import React from "react";
import { cs1, cs2, chat3 } from "../assets/whatsapp";
function Message({ msg, time, isLink, img, sent }) {
  console.log(msg);
  return (
    <>
      <div>
        <div class="flex flex-col w-full   mb-4">
          <div class="flex flex-col h-full w-full ">
            <div class="grid grid-cols-12 gap-y-2">
              <div class="col-start-1 col-end-12 p-3 rounded-lg w-200">
                <div class="flex flex-row items-center w-full">
                  <div class="flex items-center justify-center h-10 w-10  text-white flex-shrink-0">
                    <div class="flex items-center  justify-center h-10 w-10 rounded-full bg-gray-200 text-white flex-shrink-0">
                      <img
                        src={cs1}
                        alt="profile_picture"
                        className="rounded-full w-[25px] h-[25px] "
                      />
                    </div>
                  </div>
                  <div class="relative ml-3  text-sm bg-[#a7dcfc] py-2 px-4 w-full text-dark shadow rounded-xl">
                    <div>Hey How are you today?</div>
                  </div>
                </div>
              </div>
              <div class="col-start-1 col-end-12 p-3 rounded-lg w-200">
                <div class="flex flex-row items-center">
                  <div class="flex items-center justify-center h-10 w-10  text-white flex-shrink-0">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 text-white flex-shrink-0">
                      <img
                        src={cs1}
                        alt="profile_picture"
                        className="rounded-full w-[25px] h-[25px] "
                      />
                    </div>
                  </div>
                  <div class="relative ml-3 text-sm bg-[#a7dcfc] py-2 px-4  w-full text-dark shadow rounded-xl">
                    <div class=" w-full">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel ipsa commodi illum saepe numquam maxime asperiores
                      voluptate sit, minima perspiciatis.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-start-1 col-end-12 p-3 rounded-lg w-200">
                <div class="flex flex-row items-center">
                  <div class="flex items-center justify-center h-10 w-10  text-white flex-shrink-0">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[green] text-white flex-shrink-0">
                    <img
                        src={chat3}
                        alt="profile_picture"
                        className="rounded-full w-[25px] h-[25px]  "
                      />
                    </div>
                  </div>
                  <div class="relative ml-3 text-sm bg-[green] py-2 px-4  w-full text-white shadow rounded-xl">
                  <div>{msg}</div>
                  </div>
                </div>
              </div>
              {/* <div class="col-start-1  col-end-8  rounded-lg">
                <div class="flex items-center justify-start flex-row-reverse">
                  <div class="flex items-center justify-center h-10 w-10  text-white flex-shrink-0">
                    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[#fff] text-white flex-shrink-0">
                      <img
                        src={chat3}
                        alt="profile_picture"
                        className="rounded-full w-[45px] h-[45px] "
                      />
                    </div>
                  </div>
                  <div class="relative mr-3 text-sm bg-[#a7dcfc] py-2 px-4  text-dark shadow rounded-xl">
                    <div>{msg}</div>
                  </div>
                </div>
              </div> */}

              {/* <div class="col-start-1 col-end-8 p-3 rounded-lg">
                <div class="flex flex-row items-center">
                  <div class="flex items-center justify-center h-10 w-10 text-white flex-shrink-0">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[#fff] text-white flex-shrink-0">
                  <img
                  src={cs1}
                  alt="profile_picture"
                  className="rounded-full w-[45px] h-[45px] "
                />
                  </div>
                  </div>
                  <div class="relative ml-3 text-sm bg-[#a7dcfc] py-2 px-4  text-dark shadow rounded-xl">
                    <div>Lorem ipsum dolor sit amet !</div>
                  </div>
                </div>
              </div>
              <div class="col-start-6 col-end-13 p-3 rounded-lg">
                <div class="flex items-center justify-start flex-row-reverse">
                  <div class="flex items-center justify-center h-10 w-10  text-white flex-shrink-0">
                  <div class="flex items-center justify-center h-10 w-10 rounded-full bg-[#fff] text-white flex-shrink-0">
                  <img
                  src={cs1}
                  alt="profile_picture"
                  className="rounded-full w-[45px] h-[45px] "
                />
                  </div>
                  </div>
                  <div class="relative mr-3 text-sm bg-[#a7dcfc] py-2 px-4  text-dark shadow rounded-xl">
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                    <div class="absolute text-xs bottom-0 right-0 -mb-9  text-gray-500 bg-[#f0faf9] py-2 px-4 shadow rounded-xl">
                      Copy
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`flex justify-center items-center rounded-md w-fit my-1 ${
          sent ? "bg-[#f0faf9] ml-auto" : "bg-[#fff] mr-auto "
        }`}
      >
        <img
          className="h-5 w-5 text-blue-500 m-2"
          src="data:image/png;base64,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"
        />

        
        {img ? (
          <div className="relative w-100 p-2">
        
            <img
              src={img}
              alt="img_message"
              className="rounded-md max-w-[270px] w-100"
            />
          
            <p className="absolute right-2 bottom-3 text-[#8796a1] text-[10px] min-w-[50px]">
              {time}
            </p>
          </div>
        ) : (
       
          <div
            className="flex justify-between items-end max-w-[410px] p-2"
            style={{ wordBreak: "break-word" }}
          >
     
            {isLink ? (
              <a
                href={msg}
                target="blank"
                className="text-[#53beec] hover:text-[#53beec] focus:text-[#53beec] active:text-[#53beec] text-sm underline hover:underline mr-2"
              >
                {msg}
              </a>
            ) : (
             
              <p className="text-black text-sm mr-2 p-2">{msg}</p>
            )}
            <p className="text-[#8796a1] text-[10px] min-w-[50px]">{time}</p>
          </div>
        )}
      </div> */}
    </>
  );
}

export default Message;
