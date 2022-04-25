import { createSlice } from "@reduxjs/toolkit";

export interface ArticleType{
    title: string,
    name: string,
    category: string,
    subject: string
}

export interface ArticleState{
    loading: boolean
    data: ArticleType[]
    error: any
}
const initialState: ArticleState={
    loading: false,
    data: [],
    error: null
}
const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        articleRequest ( state: ArticleState, payload){
            alert('진행 2 : Reducer 내부')
            state.loading = true
        },
        articleSuccess ( state: ArticleState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;
        },
        articleFailure (state: ArticleState, {payload}){
            state.data = payload;
            state.loading
        }
    }
})
const {reducer, actions} = articleSlice
export const articleActions = actions
export default reducer