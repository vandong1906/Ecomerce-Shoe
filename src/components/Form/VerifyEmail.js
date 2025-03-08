import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import axiosInstance from '@components/CustomAxios/AxiosCustom';
import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Verify() {
    const [otp, setOtp] = useState(new Array(4).fill('')); // Assuming 6 OTP inputs
    const inputRefs = React.useRef([]);
    const navigate = useNavigate();
    const [alert, setAlert] = useState({
        message: 'Your changes have been saved!',
        color: 'green',
        detail: 'You can continue with your work.',
    });
    const [loading, setloading] = useState(false);
    const handleSubmit = () => {
        const handleRegiter = async () => {
            const code = otp.join("");
            const respon = await axiosInstance.post("/v1/user/register/verify", JSON.stringify({ code }));
            console.log(respon);
            console.log("Entered OTP:", code);
            if (respon.status == 200) {
                setloading(true);
                setTimeout(() => {
                    navigate("/");
                }, 5000);
            }
            // setSucess(true);
        };
        handleRegiter();
    };
    const handleChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };
    const handleAlertClose = () => {
        console.log("Alert has been closed!");
        setloading(false); // Cập nhật lại trạng thái sau khi alert tắt
    };
    return _jsx(_Fragment, { children: _jsx("div", { className: "flex items-center justify-center min-h-screen bg-gray-100", children: _jsxs("div", { className: "bg-white p-8 rounded shadow-md w-96 text-center", children: [_jsx("h1", { className: "text-gray-800 text-xl font-semibold mb-2", children: "VERIFY YOUR EMAIL ADDRESS" }), _jsx("hr", { className: "my-4" }), _jsx("p", { className: "text-gray-600 mb-4", children: "A verification code has been sent to" }), _jsx("p", { className: "text-gray-800 font-semibold mb-4", children: "******@peatix.com" }), _jsx("p", { className: "text-gray-600 mb-4", children: "Please check your inbox and enter the verification code below to verify your email address. The code will expire in 12:33" }), _jsx("div", { className: "flex justify-center mb-4 space-x-2", children: otp.map((value, index) => (_jsx("input", { type: "text", value: value, onChange: (e) => handleChange(e, index), maxLength: 1, ref: (el) => inputRefs.current[index] = el, className: "w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500", autoFocus: index === 0 }, index))) }), _jsx("button", { className: "bg-green-500 text-white py-2 px-4 rounded w-full mb-4", onClick: (e) => {
                            e.preventDefault();
                            handleSubmit();
                        }, children: "Verify" }), _jsx("div", { className: "flex justify-between text-green-500", children: _jsx("a", { href: "#", className: "hover:underline", children: "Resend code" }) })] }) }) });
}
export default Verify;
