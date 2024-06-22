const Validate =(email,password)=>{
    const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
if(!isemailvalid) return "EmailId or Password is not valid"
if(!ispasswordvalid) return "Not a Valid Password"

return null;
}

 export default Validate;