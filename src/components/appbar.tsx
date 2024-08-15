import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Appbar=()=>{
    const Navigate=useNavigate();

    return <div className="">
        <div className=" bg-slate- flex justify-between">
        <div className="m-2 p-2 font-bold text-2xl font-mono text-center">
        <Link to='/todos'>TodoApp</Link>    
        </div>
        <div className="flex">
        <div className="m-2">
        <button className=" bg-transparent hover:bg-blue-500 text-black-700 font-semibold
         hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded" onClick={async ()=>{
            try{
                const response=await axios.post(BACKEND_URL+"/logout",{},{
                    withCredentials:true
                })
                document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                 Navigate('/signin')
            }catch(e){
            console.error('Logout error:', e);
            }
         }}>
        Logout
        </button>
        </div>
        <div className="m-2">
        <button className=" bg-transparent hover:bg-blue-500 text-black-700 font-semibold
         hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded" onClick={()=>{
            Navigate('/createtodo')
         }}>
        Create
        </button>
        </div>
        </div>
        </div>
    </div>
}