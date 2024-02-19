import { Get } from "../Requests/Requests"


export const getUsers = async(URL)=>{
    try{
        const res = await Get(URL)
        return res
    }catch(err){
        throw new Error(err)
    }
}