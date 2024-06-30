import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useRef, useState } from "react";
import Validate from "../Utils/Validate";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/Firebase";
const Login = () => {
  const navigate=useNavigate()
  const email = useRef("");
  const password = useRef("");
  const [errMesg, setErrMsg] = useState(null);
  const handleButtonClick = () => {
    const message = Validate(email.current.value, password.current.value);
    setErrMsg(message);
    if (message) return;

    
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    //console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMsg(errorCode+" "+errorMessage)
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
            <h2 className="text-3xl font-semibold text-white">Sign In</h2>
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-3 w-full bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 w-full bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <p className="text-red-500 font-bold">{errMesg}</p>
            <button
              className="p-3 w-full bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
              onClick={handleButtonClick}
            >
              Sign In
            </button>
            <p className="text-gray-500 text-sm">
              New to Netflix?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Sign up now
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
