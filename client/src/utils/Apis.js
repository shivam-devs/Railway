import { commonrequest } from "./ApiCall";
const HOST = "http://localhost:8000";
// http://127.0.0.1:8000/login/

export const resisterfunction = async (data)=>{
    return await commonrequest("POST",`${HOST}/register/`,data)
}
export const loginfunction = async (data)=>{
    return await commonrequest("POST",`${HOST}/login/`,data)
}
