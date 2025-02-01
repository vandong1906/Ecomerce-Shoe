
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
    const resetValue = () => {
        setName('');
        setPassword('');
        setRegister({
            User_Name: "",
            password: "",
            mail: "",
        });
    };
    const authContextValue: IAuthContext = useAuthentication();
    async function login() {
        const response = await CallUser().login({ User_Name, password });
        console.log(response);
        if (response) {
            authContextValue.setUser(response);
            console.log(authContextValue.login);
        }
    }
    const validateEmail = (email: string) => {
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
            if (validateEmail(register?.mail)) {
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
            <form onSubmit={e => e.preventDefault} className={clsx("bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-lg")}>
                <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
                <div className="flex justify-center mb-6">
                    <button
                        className={clsx("py-2 px-4 rounded-l-full border-2", State ? "bg-white text-black" : "bg-gradient-to-r from-blue-500 to-blue-700 text-white")}
                        onClick={(e) => {
                            e.preventDefault();
                            resetValue();
                            setState(!State);
                        }}>Login
                    </button>
                    <button className={clsx(" py-2 px-4 rounded-r-full", !State ? "bg-white text-black" : "bg-gradient-to-r from-blue-500 to-blue-700 text-white")}
                        onClick={(e) => {
                            e.preventDefault();
                            resetValue();
                            setState(!State);
                        }}>Register
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
                {
                    State &&
                    <>
                        <div className="mb-4">
                            <input type="password" placeholder="Password" name='password' onChange={(e) => handleInputChange(e)}
                                className="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                    </>
                }

                <div className="mb-4 text-right">
                    <a href="#" className="text-blue-500">Forgot password?</a>
                </div>
                <div className="mb-4">
                    {
                        State ? <button
                            onClick={handlerSignUp}
                            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg">Register
                        </button>
                            : <button
                                onClick={(e) => login()}

                                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg">Login
                            </button>
                    }
                </div>

            </form>
        </div>
    </>

}

export default Form;