import { Link } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import Validate from "../Utils/Validate";
import { auth } from "../Utils/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [errMsg, setErrMsg] = useState("");
  const email = useRef("");
  const password = useRef("");
  const handleButttonClick = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrMsg(message);

    if (message) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode + "  " + errorMessage)
        // ..
      });
  };
  return (
    <div className="relative h-screen">
      <Header />
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="bg-black bg-opacity-75 p-8 rounded-lg shadow-2xl max-w-md w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center space-y-6"
          >
            <h2 className="text-3xl font-semibold text-white">Sign Up</h2>
            <input
              type="text"
              placeholder="UserName"
              className="p-3 w-full bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              ref={email}
              type="text"
              placeholder="Email-Address"
              className="p-3 w-full bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 w-full bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <p className="text-red-500 font-bold ">{errMsg}</p>
            <button
              onClick={handleButttonClick}
              className="p-3 w-full bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Sign Up
            </button>
            <p className="text-gray-500 text-sm">
              Already Have an account?{" "}
              <Link to="/" className="text-white hover:underline">
                Sign in now
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
