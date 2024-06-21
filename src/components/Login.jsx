import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
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
          <form className="flex flex-col items-center space-y-6">
            <h2 className="text-3xl font-semibold text-white">Sign In</h2>
            <input
              type="text"
              placeholder="Email Address"
              className="p-3 w-full bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 w-full bg-gray-900 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              className="p-3 w-full bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Sign In
            </button>
            <p className="text-gray-500 text-sm">
              New to Netflix? <Link to="/signup" className="text-white hover:underline">Sign up now</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
