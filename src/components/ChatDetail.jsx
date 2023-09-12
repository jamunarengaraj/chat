import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import RoundedBtn from "./Common/RoundedBtn";
import { messagesData } from "../data/whatsapp";
import { MdSearch, MdSend } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { BiHappy } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { cs1, cs2 } from "../assets/whatsapp";
import { getTime } from "../logic/whatsapp";

function ChatDetail() {
  const [messages, setMessages] = useState(messagesData);
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  // Functions

  const addMessage = (msg) => {
    const newMessages = [...messages, msg];
    setMessages(newMessages);
  };

  const handleEmojiClick = () => {
    inputRef.current.value += "🔥";
    inputRef.current.focus();
  };

  const handleImgUpload = () => {
    addMessage({
      img: cs2,
      time: getTime(),
      sent: true,
    });
  };

  const handleInputChange = () => {
    inputRef.current.value.length === 0 ? setTyping(false) : setTyping(true);
  };

  const handleInputSubmit = () => {
    if (inputRef.current.value.length > 0) {
      addMessage({
        msg: inputRef.current.value,
        time: getTime(),
        sent: true,
      });
      inputRef.current.value = "";
      inputRef.current.focus();
      setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const listener = (e) => {
      if (e.code === "Enter") handleInputSubmit();
    };

    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  });

  return (
    // ChatDetail main container
    // <div className="flex flex-col h-screen">
    //   {/* Contact nav */}

    //   {/* Messages section */}
    //   {/* <div
    //     className="  bg-contain  "
    //     style={{ padding: "12px 7%", borderRadius: "50px" }}
    //   > */}
    //     <div>
    //       {messages.map((msg) => (
    //         <Message
    //           msg={msg.msg}
    //           time={msg.time}
    //           isLink={msg.isLink}
    //           img={msg.img}
    //           sent={msg.sent}
    //         />
    //       ))}
    //       <div ref={bottomRef} />
    //     </div>

    //     {/* Bottom section */}
    //   {/* </div> */}
    // </div>
    <div>
      {messages.map((msg) => (
        <Message
          msg={msg.msg}
          time={msg.time}
          isLink={msg.isLink}
          img={msg.img}
          sent={msg.sent}
        />
      ))}
      
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatDetail;
