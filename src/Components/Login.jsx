import Header from "./Header";
const Login = () => {
  return (
    <div className="bg-[url('/src/assets/pexels-rpnickson-3131971_compressed.jpg')] bg-cover bg-center h-screen">
       <Header />
      <form className="w-1/4 h-2/3 p-8 bg-black opacity-75 justify-self-center text-white flex-column" >
               <h1 className=" mb-6 w-full font-bold text-4xl text-white"> Sign In</h1>
        <input className="py-2 mb-6 w-full text-center border-2 border-solid rounded-md"type="text" placeholder="Enter Email "></input>
        <input className="py-2 mb-6 w-full text-center border-2 border-solid  rounded-md"type="password" placeholder="password"></input>
        <button className="py-2 mb-6 w-full text-center bg-red-600  rounded-md">Submit</button>
        <p>Dont have account? Sign UP</p>
      </form>
    </div>
  );
};
export default Login;
