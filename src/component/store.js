import { createContext,useState } from "react";

 export const contextStore = createContext({
    data :[],
    addData:()=>{},
    setData:()=>{}
})

 export const  Globalstore =({children})=>{
    const [data, setData] = useState([]);
    const addData = (item) => {
        setData([...data, item])
}
return (
<contextStore.Provider value={{data,addData,setData}}>
    {children}
</contextStore.Provider>
)

}