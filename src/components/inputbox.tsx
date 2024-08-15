
type inputBoxs={
    header:string,
    placeholder:string,
    type:string,
    change:any
}
export const InputBox=({header,placeholder,type,change}:inputBoxs)=>{

    return<div>
    <label className="mt-3 block mb-2 mx-6 text-sm font-medium text-slate-100 ">{header}</label>
    <input type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900
     text-sm rounded-lg mx-4 w-[90%] p-2.5 " placeholder={placeholder} onChange={change} required />
</div>
}