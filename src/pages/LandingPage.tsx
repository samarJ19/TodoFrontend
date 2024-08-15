import { Link } from "react-router-dom"

export const LandingPage=()=>{


    return <div className=" bg-[url('/b12.jpg')] bg-cover h-screen overflow-auto">

    <div className=" flex text-center justify-between items-center m-2 h-[60px] p-2 ">
        <div>
            <img src="./newlogo.png" className="mix-blend-multiply size-8 " alt="logo"/>
        </div>
        <div className="flex justify-between">
        <div className="mx-3 ">
        <Link to='/'>
        <button type="button" className="content-center text-red-400 bg-transparent focus:outline-none focus:ring-4 focus:ring-gray-100 
        font-medium rounded-lg text-lg px-3 py-2.5 me-2 mb-2 ">Home</button></Link>
        </div>
        <div className="mx-3 ">
        <a href="https://www.linkedin.com/in/samarj1902/">
        <button type="button" className="content-center bg-transparent focus:outline-none 
        hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 hover:text-gray-100 
        font-medium rounded-lg text-lg px-3 py-2.5 me-2 mb-2 ">About Me</button></a>
        </div>
        <div className="mx-3 ">
        <Link to='/signin'>
        <button type="button" className="content-center bg-transparent focus:outline-none 
        hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 hover:text-gray-100
        font-medium rounded-lg text-lg px-3 py-2.5 me-2 mb-2 ">Login</button></Link>
        </div>
        <div className="mx-3 ">
        <Link to='/signup'>
        <button type="button" className="content-center bg-transparent focus:outline-none 
        hover:bg-gray-900 focus:ring-4 focus:ring-gray-100 hover:text-gray-100
        font-medium rounded-lg text-lg px-3 py-2.5 me-2 mb-2 ">Signup</button></Link>
        </div>
        </div>
        
    </div>
      <div className=" grid grid-cols-1 lg: grid-cols-[60%_40%] gap-6  " >
        <div className="m-4 w-[650px]  relative top-8 left-16 "> 
        <div className="font-extrabold font-kanit text-4xl mx-4 mt-4">
        TO-DO <br/> LIST            
        </div>
        <div className="whitespace-normal m-2.5 font-kanit relative top-3">
        <br/>
        To-Do Web App: This application allows users to manage their tasks efficiently by providing a secure 
        login system. After logging in, users can create, update, and delete their to-do items. 
        The app features an intuitive interface where tasks can be easily organized, prioritized, 
        and marked as complete. With real-time updates and seamless navigation, users can keep track 
        of their daily activities and ensure nothing falls through the cracks.
        The app is designed with user-friendliness in mind, making task management a hassle-free experience.
        </div>
        </div>
         <div className="hidden lg:block relative top-8 right-16 ">
         <img alt='clock' src='./test1.png' className="w-[650px] flex"/>
         </div>
      </div>
</div>
}