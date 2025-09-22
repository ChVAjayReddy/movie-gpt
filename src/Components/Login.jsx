import { useRef, useState } from "react";
import Header from "./Header";
import {validateData} from "../Utils/Validate"
const Login = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const[message,setmessage]=useState(null);
  function isSignUpForm() {
    setisSignUp(!isSignUp);
  }
  const email=useRef(null);
  const password=useRef(null);
    function isvalidateData(){
     const errormessage= validateData(email.current.value,password.current.value);
     console.log(errormessage)
     setmessage(errormessage);

  }
  return (
    <div className="bg-[url('/src/assets/pexels-rpnickson-3131971_compressed.jpg')] bg-cover bg-center h-screen">
      <Header />
      <form  onSubmit={(e)=>e.preventDefault()}className="w-3/10 h-max p-10 bg-black opacity-75 justify-self-center text-white flex-column rounded-md">
        <h1 className=" mb-8 w-full font-bold text-4xl text-white">
          {isSignUp ? " Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            className="py-2 mb-8 w-full text-center border-2 border-solid rounded-md placeholder:text-white "
            type="text"
            placeholder="Enter Name "
          ></input>
        )}
        <input ref={email}
          className="py-2 mb-8 w-full text-center border-2 border-solid rounded-md placeholder:text-white"
          type="text"
          placeholder="Enter Email "
        ></input>
        <input ref={password}
          className="py-2 mb-8 w-full text-center border-2 border-solid rounded-md text-white placeholder:text-white"
          type="password"
          placeholder="Password"
        ></input>
        <p className="text-red-600 text-2xl py-2">{message}</p>
        <button  onClick={isvalidateData}className="cursor-pointer py-2 mb-8 w-full text-center bg-red-600  rounded-md">
          {isSignUp ? " Sign Up" : "Sign In"}
        </button>
        <p onClick={isSignUpForm} className="cursor-pointer">
          {isSignUp
            ? "Already have account? Sign In"
            : "Don't have account? Sign UP"}
        </p>
      </form>
    </div>
  );
};
export default Login;
