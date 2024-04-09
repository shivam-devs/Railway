import { commonrequest } from "./ApiCall";
const HOST = "http://localhost:8000/api";
export const resisterfunction = async (data)=>{
    return await commonrequest("POST",`${HOST}/user/`,data)
}
export const loginfunction = async (data)=>{
    return await commonrequest("POST",`${HOST}/auth/login`,data)
}
export const logoutfunction = async ()=>{
    return await commonrequest("GET",`${HOST}/auth/logout`)
}
export const searchTrain = async (data)=>{
    return await commonrequest("POST",`${HOST}/train/search`,data)
}
export const getTickets = async (uId)=>{
    return await commonrequest("GET",`${HOST}/book/${uId}`)
}
export const getTrain = async (tId)=>{
    return await commonrequest("GET",`${HOST}/train/${tId}`)
}
export const getuserInfo = async ()=>{
    return await commonrequest("GET",`${HOST}/user/return/current`)
}