import { useState } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
};
import './index.css';
import clsx from "clsx";

const Chatbot: React.FC = () => {
  const [click , setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Xin chào! Tôi có thể giúp gì cho bạn?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [trainInput, setTrainInput] = useState("");
  const [trainResponse, setTrainResponse] = useState("");
  const [updateInput, setUpdateInput] = useState("");
  const [updateResponse, setUpdateResponse] = useState("");
  const [isTraining, setIsTraining] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
    } catch {
      setMessages((prev) => [...prev, { text: "Có lỗi xảy ra, vui lòng thử lại!", sender: "bot" }]);
    }
  };

  const trainBot = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: trainInput, response: trainResponse }),
      });
      setMessages((prev) => [...prev, { text: "Bot đã học thành công!", sender: "bot" }]);
      setTrainInput("");
      setTrainResponse("");
    } catch {
      setMessages((prev) => [...prev, { text: "Lỗi khi dạy bot!", sender: "bot" }]);
    }
  };

  const updateBotResponse = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/update-response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: updateInput, newResponse: updateResponse }),
      });
      setMessages((prev) => [...prev, { text: "Cập nhật thành công!", sender: "bot" }]);
      setUpdateInput("");
      setUpdateResponse("");
    } catch {
      setMessages((prev) => [...prev, { text: "Lỗi khi cập nhật!", sender: "bot" }]);
    }
  };

  return <>
   <button
          type="button"
          onClick={handleClick}
          className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="h-5 w-5 transition-transform group-hover:rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
          <span className="sr-only">Open actions menu</span>
        </button>
    <div className={clsx('flex',click ? ' fixed z-50 inset-0 w-1/2 h-1/2 m-auto ' : 'hidden')}>
      <div className="chat-container">
        <div className="chat-header">
          <span>AI Chatbot</span>
          <button onClick={() => setIsTraining(!isTraining)}>
            {isTraining ? "Ẩn Dạy Bot" : "Dạy Bot"}
          </button>
        </div>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}-message`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-form" onSubmit={sendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập tin nhắn..."
            required
          />
          <button type="submit">Gửi</button>
        </form>
      </div>
      {isTraining && (
        <div className="train-section active">
          <div className="train-header">Dạy Bot</div>
          <div className="train-form">
            <form onSubmit={trainBot}>
              <input
                type="text"
                value={trainInput}
                onChange={(e) => setTrainInput(e.target.value)}
                placeholder="Câu hỏi/Nhập..."
                required
              />
              <textarea
                value={trainResponse}
                onChange={(e) => setTrainResponse(e.target.value)}
                placeholder="Câu trả lời..."
                required
              ></textarea>
              <button type="submit">Dạy</button>
            </form>
            <form onSubmit={updateBotResponse}>
              <input
                type="text"
                value={updateInput}
                onChange={(e) => setUpdateInput(e.target.value)}
                placeholder="Câu hỏi cũ..."
                required
              />
              <textarea
                value={updateResponse}
                onChange={(e) => setUpdateResponse(e.target.value)}
                placeholder="Câu trả lời mới..."
                required
              ></textarea>
              <button type="submit">Cập nhật</button>
            </form>
          </div>
        </div>
      )}
    </div>
  </>
    
  
};

export default Chatbot;