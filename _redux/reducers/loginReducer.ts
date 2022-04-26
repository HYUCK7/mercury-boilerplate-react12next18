import { createSlice } from "@reduxjs/toolkit"

export interface LoginType{
    userid: string,
    password: string 
}
export interface LoginState{
    loading: boolean
    data: LoginType[]
    error: any
}
const initialState: LoginState = {
    loading: false,
    data: [],
    error: null
}
export const loginSlice = createSlice({
    name: 'logins',
    initialState,
    reducers: {
        loginRequest(state: LoginState, payload){
            alert('진행 2: 리듀서 내부')
            state.loading = true;
        },
        loginSuccess(state: LoginState, {payload}){
            state.data = payload;
            state.loading = false;
        },
        loginFailure(state: LoginState, {payload}){
            state.data = payload;
            state.loading = false;
        }
    }
})
const {reducer, actions} = loginSlice
export const loginActions = actions
export default reducer