import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import './index.css';
import clsx from "clsx";
const Chatbot = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [messages, setMessages] = useState([
        { text: "Xin chào! Tôi có thể giúp gì cho bạn?", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [trainInput, setTrainInput] = useState("");
    const [trainResponse, setTrainResponse] = useState("");
    const [updateInput, setUpdateInput] = useState("");
    const [updateResponse, setUpdateResponse] = useState("");
    const [isTraining, setIsTraining] = useState(false);
    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim())
            return;
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
        }
        catch {
            setMessages((prev) => [...prev, { text: "Có lỗi xảy ra, vui lòng thử lại!", sender: "bot" }]);
        }
    };
    const trainBot = async (e) => {
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
        }
        catch {
            setMessages((prev) => [...prev, { text: "Lỗi khi dạy bot!", sender: "bot" }]);
        }
    };
    const updateBotResponse = async (e) => {
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
        }
        catch {
            setMessages((prev) => [...prev, { text: "Lỗi khi cập nhật!", sender: "bot" }]);
        }
    };
    return _jsxs(_Fragment, { children: [_jsxs("button", { type: "button", onClick: handleClick, className: "flex h-14 w-14 items-center justify-center rounded-lg bg-blue-700 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800", children: [_jsx("svg", { className: "h-5 w-5 transition-transform group-hover:rotate-45", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 18", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 1v16M1 9h16" }) }), _jsx("span", { className: "sr-only", children: "Open actions menu" })] }), _jsxs("div", { className: clsx('flex', click ? ' fixed z-50 inset-0 w-1/2 h-1/2 m-auto ' : 'hidden'), children: [_jsxs("div", { className: "chat-container", children: [_jsxs("div", { className: "chat-header", children: [_jsx("span", { children: "AI Chatbot" }), _jsx("button", { onClick: () => setIsTraining(!isTraining), children: isTraining ? "Ẩn Dạy Bot" : "Dạy Bot" })] }), _jsx("div", { className: "chat-box", children: messages.map((msg, index) => (_jsx("div", { className: `message ${msg.sender}-message`, children: msg.text }, index))) }), _jsxs("form", { className: "chat-form", onSubmit: sendMessage, children: [_jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: "Nh\u1EADp tin nh\u1EAFn...", required: true }), _jsx("button", { type: "submit", children: "G\u1EEDi" })] })] }), isTraining && (_jsxs("div", { className: "train-section active", children: [_jsx("div", { className: "train-header", children: "D\u1EA1y Bot" }), _jsxs("div", { className: "train-form", children: [_jsxs("form", { onSubmit: trainBot, children: [_jsx("input", { type: "text", value: trainInput, onChange: (e) => setTrainInput(e.target.value), placeholder: "C\u00E2u h\u1ECFi/Nh\u1EADp...", required: true }), _jsx("textarea", { value: trainResponse, onChange: (e) => setTrainResponse(e.target.value), placeholder: "C\u00E2u tr\u1EA3 l\u1EDDi...", required: true }), _jsx("button", { type: "submit", children: "D\u1EA1y" })] }), _jsxs("form", { onSubmit: updateBotResponse, children: [_jsx("input", { type: "text", value: updateInput, onChange: (e) => setUpdateInput(e.target.value), placeholder: "C\u00E2u h\u1ECFi c\u0169...", required: true }), _jsx("textarea", { value: updateResponse, onChange: (e) => setUpdateResponse(e.target.value), placeholder: "C\u00E2u tr\u1EA3 l\u1EDDi m\u1EDBi...", required: true }), _jsx("button", { type: "submit", children: "C\u1EADp nh\u1EADt" })] })] })] }))] })] });
};
export default Chatbot;
