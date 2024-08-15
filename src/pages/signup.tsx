import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, useCallback, useMemo, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
type UserSignup={
  firstName:string,
  lastName:string,
  email:string,
  password:string
}

export const Signup = () => {
  const Navigate = useNavigate();
  
  const [postInputs, setPostInputs] = useState<UserSignup>({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const memoizedPostInputs = useMemo(() => postInputs, [postInputs]);

  const handleInputChange = useCallback((key: keyof UserSignup) => (e: ChangeEvent<HTMLInputElement>) => {
    setPostInputs(prevInputs => ({
      ...prevInputs,
      [key]: e.target.value
    }));
  }, []);

  const sendRequest = useCallback(async () => {
    try {
      const Request = await axios.post(BACKEND_URL + "/signup", memoizedPostInputs, {
        withCredentials: true
      });
      if (Request.status === 200) {
        Navigate('/todos');
      }
    } catch (e) {
      console.log('got error while sending the request: ', e);
    }
  }, [memoizedPostInputs, Navigate]);

  return (
    <div>
      <div className="h-screen bg-[url('/b9.jpg')] overflow-auto bg-no-repeat bg-cover flex justify-center">
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-md text-2xl m-auto w-[85%] lg:w-1/4 h-[80%] lg:h-[65%]">
          <div className="text-2xl text-center text-slate-200 mt-6">
            TodoApp
          </div>
          <InputBox header="First Name" placeholder="Samar" type="text" change={handleInputChange('firstName')} />
          <InputBox header="Last Name" placeholder="Joshi" type="text" change={handleInputChange('lastName')} />
          <InputBox header="Email" placeholder="abc@gmail.com" type="text" change={handleInputChange('email')} />
          <InputBox header="Password" placeholder="123456" type="password" change={handleInputChange('password')} />
          <Button onButton="SignUp" click={sendRequest} />
          <div className="flex text-base lg:text-lg mt-2 justify-center text-slate-200">
            <div>Already have an account</div>
            <div className="mx-1 underline">
              <Link className="hover:text-blue-500" to={'/signin'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ onButton, click }: { onButton: string, click: () => void }) {
  return (
    <div className="flex justify-center mt-6">
      <button type="button" className="px-3 lg:px-5 py-2 lg:py-2.5 text-sm font-medium text-white bg-blue-700
        hover:bg-blue-800 rounded-lg text-center w-[85%] lg:w-[90%]"
        onClick={click}>
        {onButton}
      </button>
    </div>
  );
}

type InputBoxProps = {
  header: string,
  placeholder: string,
  type: string,
  change: (e: ChangeEvent<HTMLInputElement>) => void
}

function InputBox({ header, placeholder, type, change }: InputBoxProps) {
  return (
    <div>
      <label className="mt-3 block mb-2 mx-6 text-sm font-medium text-slate-100">
        {header}
      </label>
      <input type={type} className="bg-gray-50 border border-gray-300 text-gray-900
        text-sm rounded-lg mx-4 w-[85%] lg:w-[90%] p-2 lg:p-2.5"
        placeholder={placeholder}
        onChange={change}
        required />
    </div>
  );
}
