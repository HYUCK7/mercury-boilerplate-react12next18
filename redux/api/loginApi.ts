import axios, {AxiosResponse} from "axios";
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export interface LoginType{
    userid: string,
    password: string
}
export const postLogin = async (
    payload: {userid: string, password: string}) =>{
        try{
            const response: AxiosResponse<unknown, LoginType[]>=
            await axios.post(`${SERVER}/api/user/login`, payload, { headers })
            alert(`진행5 : 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    }