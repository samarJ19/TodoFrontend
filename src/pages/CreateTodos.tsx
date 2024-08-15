import { ChangeEvent, useCallback, useState } from "react"
import { Appbar } from "../components/appbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useSetRecoilState } from "recoil"
import { reloadState } from "../store/atoms"

type CreatetodoType={
  title:String,
  description:String
}
export const CreateTodo=()=>{
  
  //same issue when the data inside the usestate changes the whole cratetodo component re-renders 
  const [data,setData]=useState<CreatetodoType>({
    title:"",
    description:""
  })
  
  const Navigate=useNavigate();

  const setReload=useSetRecoilState(reloadState)

  const reloadTodos = () =>{
    setReload(prev => !prev);
  } 

  const handleinput= useCallback((key: keyof CreatetodoType) => (e:ChangeEvent<HTMLInputElement>) => {
    setData(previnputs=>({
      ...previnputs,
      [key]:e.target.value
    }));
  }, []);

  const sendRequest= useCallback( async ()=> {
      const response=await axios.post(BACKEND_URL+'/api/v1/createtodo',data,{
        withCredentials:true
     })
      reloadTodos();
        if(response.status==200){
          Navigate('/todos')
    }
   }, [Navigate,data,reloadState])

  
  
    return <div>
        <div className="bg-[url('/b9.jpg')] bg-cover overflow-auto overflow-auto to bg-slate-300">
        <Appbar/>
        </div>
        <div className="bg-[url('/b9.jpg')] bg-cover h-screen overflow-auto">
        <div className="justify-center flex   m-2">
        <h1 className="text-xl font-semibold ">Create Todo</h1>
        </div>
        <div className="m-4 flex justify-center m-auto">
        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 
        text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
        w-[50%] p-2.5 m-4"placeholder="Write your title..." onChange={handleinput('title')}></input>
        </div>
        <div className="m-2 flex justify-center m-auto">
        <textarea id="message" className="block rows-4 p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50
         rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
         //@ts-ignore
          placeholder="Write your description..." onChange={handleinput('description')}></textarea>
        </div>
        <div className="m-4 flex justify-center m-auto">
        <button type="button" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700
         hover:bg-blue-800 rounded-lg text-center w-[20%] m-4" onClick={sendRequest}>Submit</button>
        </div>
        </div>
        </div>
}