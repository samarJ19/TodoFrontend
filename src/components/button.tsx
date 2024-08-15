export const Button=({onButton}:{onButton:string})=>{
    return <div className="flex justify-center mt-6">
        <button type="button" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700
         hover:bg-blue-800 rounded-lg text-center w-[90%] " >{onButton}</button>
    </div>
}