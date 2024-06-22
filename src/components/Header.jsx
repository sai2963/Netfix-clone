import { signOut } from "firebase/auth";
import signoutsvg from "../assets/svg/OIP.jpg";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user =useSelector(store=>store.user)
  console.log(user)
  const navigate=useNavigate();
  const handleSignoutbtn =()=>{
    signOut(auth).then(() => {
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
    return (
      <div className="fixed top-0 left-0 right-0 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
       <div>
       <img
          className="w-44 border-r"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
       </div>
        {user &&(
          <div className="flex p-2">
        <img className="w-20 h-12"  src={user?.photoURL} alt="Signout"/>
        <button onClick={handleSignoutbtn} className="font-bold text-white">(Signout)</button>
        </div>
        )}
          
        
        
        
        
      </div>
    );
  };
  
  export default Header;
  