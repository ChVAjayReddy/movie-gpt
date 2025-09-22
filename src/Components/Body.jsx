import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Header from "./Header";

const Body = () => {
const appRouter=createBrowserRouter([
  {path:"netflix-gpt/",
    element:<Login/>
  },
  {path:"netflix-gpt/browse",
    element:<Browse/>
  }
])
  return (
    <div>
  
       <RouterProvider router={appRouter}/></div>
    
  )
};
export default Body;
