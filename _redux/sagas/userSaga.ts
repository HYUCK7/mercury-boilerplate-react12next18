import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { string } from 'yup';
import { userActions } from '../../redux/reducers/userReducer.ts';
import { postUser, loginApi } from '../api/userApi.ts'

interface UserJoinType{
    type: string;
    payload: {
        userid:string, password:string, email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
interface UserJoinSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

interface UserLoginType{
    type: string;
    payload: {
        userid:string, password:string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        userid:string,  email:string, 
        name:string, phone:string, birth:string, address:string
    }
}
function* join(user: UserJoinType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(user))
        const response: UserJoinSuccessType = yield postUser(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.joinFailure(error))
    }
}
function* login(login: UserLoginType){
    try{
        alert(' 진행 3: saga내부 성공  '+ JSON.stringify(login))
        const response: UserLoginSuccessType = yield loginApi(login.payload)
        yield put(userActions.loginSuccess(response))
    }catch(error){
         alert('진행 3: saga내부 join 실패  ') 
         yield put(userActions.loginFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}
export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}