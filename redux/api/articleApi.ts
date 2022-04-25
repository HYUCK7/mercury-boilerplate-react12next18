import axios, { AxiosResponse } from "axios";
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
export interface ArticleType{
    title: string,
    name: string,
    category: string, // value is T , F
    subject: string
}
export const postArticle = async(
    payload: {title: string, name: string, category: string, subject: string}) =>{
        try{
            const response: AxiosResponse<unknown, ArticleType[]>=
            await axios.post(`${SERVER}/api/article/addArticle`, payload, { headers })
            alert(`진행 5: 응답 성공 + ${JSON.stringify(response.data)}`)
            return response.data
        }catch(err){
            return err;
        }
    }
