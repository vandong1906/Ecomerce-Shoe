import clsx from "clsx";
import * as React from "react";
import CallUser, { Iregister } from "@components/Api/ApiUser";
import { IAuthContext, useAuthentication } from "@contexts/Authuciance";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "@config/auth_google";
const Form = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [State, setState] = React.useState(false);
  const [User_Name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const [close, setClose] = React.useState(false);
  const [register, setRegister] = React.useState<Iregister>({
    User_Name: "",
    password: "",
    mail: "",
  });
  React.useEffect(() => {
    if (open) {
      setClose(false);
    }
  }, [open]);
  const resetValue = () => {
    setName("");
    setPassword("");
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
          navigate("/register/verify");
        }
      }
      console.log("loi email");
    } catch (error) {
      console.error("Error:", error);
    }
  }
const onClick = async() => {
  const user = await loginGoogle();
  authContextValue.setUser(user);
  onClose();
};

  return (
    <>
      <div
        className={clsx(
          " items-center justify-center min-h-screen inset-0 fixed bg-black opacity-85 z-50",open ? "flex" : "hidden"
        )}
      >
        <form
          className={clsx(
            "bg-white p-8 rounded-lg shadow-lg w-full max-w-lg max-h-lg"
          )}
        >
          <button type="submit" className="right-0" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-center mb-6">Login Form</h2>
          <div className="flex justify-center mb-6">
            <button
              className={clsx(
                "py-2 px-4 rounded-l-full border-2",
                State
                  ? "bg-white text-black"
                  : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              )}
              onClick={(e) => {
                e.preventDefault();
                resetValue();
                setState(!State);
              }}
            >
              Login
            </button>
            <button
              className={clsx(
                " py-2 px-4 rounded-r-full border-2",
                !State
                  ? "bg-white text-black"
                  : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              )}
              onClick={(e) => {
                e.preventDefault();
                resetValue();
                setState(!State);
              }}
            >
              Register
            </button>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          {State && (
            <>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => handleInputChange(e)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </>
          )}

          <div className="mb-4 text-right flex bg-gradient-to-r bg-white border-2  w-full py-3 rounded-lg justify-center button-hover ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-8 w-8 inline-block mr-2"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <button
              className=""
              type="button"
              onClick={onClick}
            >
              login google
            </button>
          </div>

          <div className="mb-4">
            {State ? (
              <button
                onClick={handlerSignUp}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg"
              >
                Register
              </button>
            ) : (
              <button
                onClick={(e) => login()}
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white w-full py-3 rounded-lg"
              >
                Login
              </button>
            )}
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
