import React, { useState, useEffect } from "react";
import LeftMenu from "../components/LeftMenu";
import { useFormik } from "formik";
import ChatDetail from "../components/ChatDetail";
import LoadingScreen from "../components/LoadingScreen";
import { cs1, cs2, chat2 } from "../assets/whatsapp";
import Message from "../components/Message";
function WhatsApp() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ message: "" });

  const [message, setMessage] = useState([]);
  const formik = useFormik({
    initialValues: { message: "" },
    onSubmit: (values) => {
      message.push(values);
      formik.resetForm();
    },
  });

  useEffect(() => {
    const id = setTimeout(() => {
      if (progress >= 100) setLoading(false);
      else {
        const increment = Math.floor(Math.random() * (10 + 1)) + 7;
        setProgress(progress + increment);
      }
    }, 300);

    return () => clearTimeout(id);
  }, [progress]);

  return (
    <>
      <div class="flex h-screen antialiased text-gray-800 bg-[#cecece] ">
        <div class="flex flex-row  overflow-x-hidden ">
          <div>
            <h1 class="text-[#cecece]">vbmcbm</h1>
            <img
              src={cs1}
              alt="profile_picture"
              className="rounded-full w-[45px] h-[45px] ml-4 mt-2"
            />

            <div class="group fixed bottom-0 top-27 p-2  flex items-start justify-start w-20 h-20 ">
              <div class=" shadow-xl flex items-center  p-3  z-50 absolute justify-center h-10 w-10 rounded-full bg-[#000] text-white flex-shrink-0  ">
                +
              </div>

              <div class="flex h-10 w-32 items-center hover:bg-gray-100  p-3 text-sm bg-[#fff]   shadow rounded-full absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-24  flex  p-2 hover:p-3 bg-[#fff]  text-white">
                <div class="flex items-center justify-center h-10  text-white flex-shrink-0  ">
                  <div class="flex items-center justify-center   rounded-full bg-[#f2f2f2] text-dark flex-shrink-0">
                    6
                  </div>
                  <div class=" pl-3   text-md  font-semibold text-dark ">
                    Clear Chat
                  </div>
                </div>
              </div>
              <div class="flex h-10 w-32 items-center hover:bg-gray-100  p-3 text-sm bg-[#fff]   shadow rounded-full absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-1 mb-40 flex  p-2 hover:p-3 bg-[#fff]  text-white">
                <div class="flex items-center justify-center h-10  text-white flex-shrink-0  ">
                  <div class="flex items-center justify-center   rounded-full bg-[#f2f2f2] text-dark flex-shrink-0">
                    6
                  </div>
                  <div class=" pl-3   text-md  font-semibold text-dark ">
                    End Chat
                  </div>
                </div>
              </div>

              <div class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-0 group-hover:-translate-y-14 group-hover:-translate-x-1   flex  p-2 hover:p-3 bg-yellow-300 hover:bg-yellow-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="flex flex-col flex-auto  p-6 ">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl  bg-[white] h-4/6 p-4 ">
              <h4 class=" "> Super Chat</h4>
              <div class="  overflow-y-scroll ">
                <ChatDetail message={message} />
              </div>
              <div class="flex flex-row items-center rounded-xl bg-white w-full px-4">
                <div class="flex-grow  m-1 border rounded-xl ">
                  <div class="relative w-full ">
                    <form onSubmit={formik.handleSubmit}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          placeholder="Ask For Search Everything"
                          class="flex w-full sm:text-sm p-3 pr-10 rounded-lg bg-[#fbfbfb] focus:outline-none focus:border-indigo-300 pl-4"
                        />

                        <div>
                          <button
                            type="submit"
                            class="flex items-center justify-center h-10 w-10 rounded-full bg-[#000] text-white flex-shrink-0"
                          >
                            <span class="ml-1">
                              <svg
                                class="w-4 h-4 transform rotate-45 -mt-px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* <div class="relative">

                        <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                          <div class="ml-1 mr-2">
                            <button
                              type="submit"
                              class="flex items-center justify-center h-10 w-10 rounded-full bg-[#000] text-white flex-shrink-0"
                            >
                              <span class="ml-1">
                                <svg
                                  class="w-4 h-4 transform rotate-45 -mt-px"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div> */}
                      {/* <input
                        type="text"
                        id="message"
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        onSubmit={formik.handleSubmit}
                        placeholder="Ask For Search Everything "
                        class="flex w-full sm:text-sm pt-4 rounded-lg bg-[#fbfbfb] focus:outline-none focus:border-indigo-300 pl-4  "
                      /> */}

                      {/* <div
                        class=" m-3  rounded-xl    "
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div></div>
                        
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col py-8 h-14 pr-2 w-64 bg-[#cecece] flex-shrink-0 ">
            <div
              class="flex flex-col   bg-[#fff]   rounded-2xl p-3 "
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div class="flex items-center justify-center h-10 w-10  text-white flex-shrink-0  ">
                <div class="flex items-center justify-center h-9 w-9 ml-8 rounded-full bg-[#f2f2f2] text-dark flex-shrink-0">
                  <img
                    src={chat2}
                    alt="profile_picture"
                    className="rounded-full w-[30px] h-[30px] "
                  />
                </div>
                <div class=" text-sm font-semibold text-dark pl-2">User</div>
              </div>
            </div>

            <br />

            <div class="flex flex-col bg-gray-100 border border-gray-200  rounded-lg">
              <LeftMenu />
            </div>

            {/* <div class="flex fl ex-col items-center bg-[#f0faf9] border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"></div> */}
          </div>
          <h1 class="text-[#cecece]">vnbv</h1>
        </div>
      </div>
    </>
  );
}

export default WhatsApp;
