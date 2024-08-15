import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

type Todocardtype={
    title:string,
    description:string,
    id:string,
    default_title:string,
    default_description:string
}
export const TodoCard=({title,description,id,default_description,default_title}:Todocardtype)=>{
    const Navigate=useNavigate();
    return <div>
        <div className="flex justify-center m-2" >
        <div className="bg-[url('/b2.jpg')] rounded-md bg-cover bg-no-repeat w-[70%] lg:w-[35%] h-[25%] ">
        <div className="relative font-medium font-serif bottom- top-4 left-2 p- text-2xl">
        {default_title}- 
        </div>
        <div className="relative bottom-3.5 left-16 px-2 ">
        {title}    
        </div>
        <div className="relative top- left px-2 text-2xl font-medium font-serif">
        {default_description}- 
        </div>
        <div className="relative bottom-7 left-16 mx-16 px-6 whitespace-normal">
        {description}
        </div>
        <div className="float-right flex">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={async ()=>{
            const res=await axios.post(BACKEND_URL+"/api/v1/delete",{
                id
            },{
                withCredentials:true
            });
            console.log(res.data)
            location.reload();
        }} className="size-5 relative cursor-pointer mb-2 mx-2 " x="0px" y="0px" viewBox="0 0 24 24">
        <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 22 L 19 22 L 19 7 L 5 7 z M 8 9 L 10 9 L 10 20 L 8 20 L 8 9 z M 14 9 L 16 9 L 16 20 L 14 20 L 14 9 z"></path>
        </svg>
        <div>
        {/* when we will click on the update then it should redirect the page to updatetodo with :id=id */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" onClick={()=>{Navigate(`/updatetodo/${id}`)}} className="mx-1 cursor-pointer size-5">
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
        </svg>
        </div>
        </div>
        </div>
        </div>
    </div> 
}
