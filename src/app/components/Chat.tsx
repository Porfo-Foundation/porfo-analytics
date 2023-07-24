"use client";
import {
  useState,
  useRef,
  useEffect,
  FormEvent,
} from "react";
import { IMessage } from "../interface/chat";
import Message from "./Message";
const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [txtInput, setTxtInput] = useState<string>("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTxtInput(event.target.value);
  };



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const item = event.target as any;
    if (item.elements[0].value!=="") {
      setMessages([...messages, { user: "Sushil", prompt: txtInput }]);
      setTxtInput("");
    }
  };

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-full p-4 flex flex-col justify-between items-center">
      <div
        className={`w-full h-[88%] overflow-scroll no-scrollbar`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {messages?.map((info, index) => (
          <Message message={info} key={index} />
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full h-[10%]">
        <div className="w-full h-[100%] border-2 border-neutral-600 rounded-md flex flex-row justify-between items-center">
          <input
            type="text"
            value={txtInput}
            placeholder="write your query..."
            onChange={handleChange}
            className="w-[85%] h-full px-2 outline-none ml-2 bg-neutral-900 text-neutral-200"
          />
          <button
            type="submit"
            className="flex w-25 md:w-[15%] h-full border-2 border-l-black rounded-md justify-center items-center bg-[#1D5D9B] text-neutral-200 cursor-pointer"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
