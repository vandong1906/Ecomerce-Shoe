
import clsx from 'clsx';
import * as React from 'react';
import CallUser, { Iregister } from "@components/function/CallUser";
import { IAuthContext, useAuthentication } from "@contexts/Authuciance";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [State, setState] = React.useState(false);
    const [User_Name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const [register, setRegister] = React.useState<Iregister>({
        User_Name: "",
        password: "",
        mail: "",
    });
    const authContextValue: IAuthContext = useAuthentication();
    async function login() {
        const response = await CallUser().login({ User_Name, password });
        console.log(response);
        if (response) {
            authContextValue.setUser(response);
            console.log(authContextValue.login);
        }
    }
    const validateEmail = (email:string) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegister((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    async function handlerSignUp() {

        try {
            console.log("User data:", register);
            if(validateEmail(register?.mail)){
                console.log(import.meta.env.VITE_API_URL + "/v1/user/register");
                const status = await CallUser().create(register);
                console.log("Response status:", status.status);
                if (status.status == 200) {
                    navigate('/register/verify');
                }
            }
            console.log("loi email");
          
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return <>
        <div className={clsx("flex items-center justify-center min-h-screen inset-0 fixed bg-black opacity-85 z-50")}>
            <form onSubmit={e=>e.preventDefault} className={clsx("bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-lg", State ? "hidden" : "block")}>
                <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
                <div className="flex justify-center mb-6">
                    <button
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-l-full">Login
                    </button>
                    <button className="bg-white text-black py-2 px-4 rounded-r-full border border-gray-300"
                        onClick={(e) => {
                            e.preventDefault();
                            setState(!State);
                        }}>Signup
                    </button>
                </div>
                <div className="mb-4">
                    <input type="text" placeholder="Email Address"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        onChange={
                            (event) => {
                                setName(event.target.value);
                            }
                        } />
                </div>
                <div className="mb-4">
                    <input type="password" placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
                <div className="mb-4 text-right">
                    <a href="#" className="text-blue-500">Forgot password?</a>
                </div>
                <div className="mb-4">
                    <button
                        onClick={(e) => login()}

                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg">Login
                    </button>
                </div>
                <div className="text-center">
                    <span>Create an account </span>
                    <a href="#" className="text-blue-500">Signup now</a>
                </div>
            </form>

            {/*                               Register                              */}
            <div className={clsx("bg-white p-8 rounded-lg shadow-lg w-full max-w-sm", State ? "block" : "hidden")}>
                    <h2 className="text-2xl font-bold text-center mb-6">Register Form</h2>
                    <div className="flex justify-center mb-6">
                        <button className="bg-gradient-to-rpy-2 px-4 rounded-l-full border  bg-white text-black border-gray-300"
                            onClick={() => {
                                setState(!State);
                            }}>Login
                        </button>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-r-full ">Signup
                        </button>
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Please in put username" name="User_name" onChange={(e) => handleInputChange(e)}
                            className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Email Address" name="mail" onChange={(e) => handleInputChange(e)}
                            className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" name='password' onChange={(e) => handleInputChange(e)}
                            className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="mb-4 text-right">
                        <a href="#" className="text-blue-500">Forgot password?</a>
                    </div>
                    <div className="mb-4">
                        <button
                            onClick={handlerSignUp}
                            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg">sign up
                        </button>
                    </div>
                    <div className="text-center">
                        <span>Create an account </span>
                        <a href="#" className="text-blue-500">Signup now</a>
                    </div>
            </div>
        </div>
    </>

}

export default Form;