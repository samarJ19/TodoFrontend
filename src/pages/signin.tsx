import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

type UserSignin={
  email:string,
  password:string
}
export const Signin=()=>{
  const Navigate=useNavigate();
  const [postInputs,setPostInputs]=useState<UserSignin>({
    email:"",
    password:""
})
  const memoizedPostInputs = useMemo(() => postInputs, [postInputs]);
  
  const handleInputChange = useCallback((key: keyof UserSignin) => (e: ChangeEvent<HTMLInputElement>) => {
    setPostInputs(prevInputs => ({
      ...prevInputs,
      [key]: e.target.value
    }));
  }, []);

  const sendRequest = useCallback(async () => {
    try{
        const Request=await axios.post(BACKEND_URL+"/signin",postInputs, {
          withCredentials: true // This ensures cookies are included in the requests
        });
      if(Request.status==200){
        Navigate('/todos');
    }
    }
      catch(e){
          console.log('got error while sending the request: ',e)
      }
},[Navigate,memoizedPostInputs])

    return <div>
    <div className="h-screen bg-[url('/b9.jpg')] bg-cover overflow-auto flex justify-center "> 
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-md text-2xl m-auto w-[77%] lg:w-1/4 lg:h-[45%] ">
      <div className="text-2xl text-center text-slate-200 mt-6">
        TodoApp
      </div>
      <InputBox header="Email" placeholder="abc@gmail.com" type="text" change={handleInputChange('email')}/>
      <InputBox header="Password" placeholder="123456" type="password" change={handleInputChange('password')}/>
      <Button onButton="SignIn" click={sendRequest}/>
      <div className="flex text-sm lg:text-lg mt-2 p-2.5 lg:mb-.5 justify-center text-slate-200">
        <div>{"Don't have an account"} </div>
        <div className="mx-1 underline" ><Link to={'/signup'}>Signup</Link></div>
        <div className="mx-1"> Now</div>
      </div>
      </div>
    </div>
 </div>
}

function Button({onButton,click}:{onButton:string,click:any}){
  return <div className="flex justify-center mt-6">
      <button type="button" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700
       hover:bg-blue-800 rounded-lg text-center w-[90%] " onClick={click}>{onButton}</button>
  </div>
}
type inputBoxs={
  header:string,
  placeholder:string,
  type:string,
  change:(e:ChangeEvent<HTMLInputElement>) => void
}

function InputBox({header,placeholder,type,change}:inputBoxs){

  return<div>
  <label className="mt-3 block mb-2 mx-6 text-sm font-medium text-slate-100 ">{header}</label>
  <input type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900
   text-sm rounded-lg mx-4 w-[85%] lg:w-[90%] p-2.5 " placeholder={placeholder} onChange={change} required />
</div>
}