import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/Firebase";
import { addUser, removeUser } from "../Utils/UserSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignoutbtn = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
  const dispatch=useDispatch();
  useEffect(() => {
  const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=> unsubscribe();
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="flex items-center">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt="User Avatar"
          />
          <button
            onClick={handleSignoutbtn}
            className="bg-white text-black font-bold py-2 px-4 rounded-full shadow hover:bg-gray-200 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
