import Alert, { Ialert } from '@components/alert/alert';
import axiosInstance from '@components/CustomAxios/AxiosCustom';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Verify() {
    const [otp, setOtp] = useState<string[]>(new Array(4).fill('')); // Assuming 6 OTP inputs
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
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
        }
        handleRegiter();
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]!.focus();
        }
    };
    const handleAlertClose = () => {
        console.log("Alert has been closed!");
        setloading(false); // Cập nhật lại trạng thái sau khi alert tắt
      };
    return <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96 text-center">
            <h1 className="text-gray-800 text-xl font-semibold mb-2">VERIFY YOUR EMAIL ADDRESS</h1>
            <hr className="my-4" />
            <p className="text-gray-600 mb-4">A verification code has been sent to</p>
            <p className="text-gray-800 font-semibold mb-4">******@peatix.com</p>
            <p className="text-gray-600 mb-4">Please check your inbox and enter the verification code below to verify your email address. The code will expire in 12:33</p>

            <div className="flex justify-center mb-4 space-x-2">
                {otp.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        maxLength={1}
                        ref={(el) => inputRefs.current[index] = el}
                        className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus={index === 0} // Optionally focus the first input on load
                    />
                ))}
            </div>

            <button 
                className="bg-green-500 text-white py-2 px-4 rounded w-full mb-4" 
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                Verify
            </button>

            <div className="flex justify-between text-green-500">
                <a href="#" className="hover:underline">Resend code</a>
            </div>
        </div>
    </div>
    {
        loading &&  <Alert message={alert.message} color={alert.color} detail={alert.detail} onClose={handleAlertClose} />
    }
    </>
  
}

export default Verify;