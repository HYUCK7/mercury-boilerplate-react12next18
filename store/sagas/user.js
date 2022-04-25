import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types"

function* addUser(action){
    try{
        const newUser = yield response.json()
        yield put({
            Type: T.USER_ADD_SUCCESSED,
            payload : newUser.data
        })
    }catch(error){
        yield put({
            type: T.USER_ADD_FAILED,
            payload : error.message
        })
    }
}

function* watchAddUser(){
    yield takeLatest(T.USER_ADD_REQUEST, addUser)
}