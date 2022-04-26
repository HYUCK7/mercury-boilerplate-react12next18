import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as T from "../types"

function* addUser(action){
    try{
        alert(' >>> Saga Commit')
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

export function* watchAddUser(){
    yield takeLatest(T.USER_ADD_REQUEST, addUser)
}

function* login(action){
    try{
        alert('4 >> Saga Call')
      const res = yield call(loginAPI, action.data)
      yield put({
        type: LOGIN_SUCCEED,
        data: res.data
      })
    } catch (err) {
      yield put({
        type: LOGIN_FAILED,
        error: err.response.data
      })
    }
  }
export function* watchLogin(){
    alert('3 >> Saga Watch')
    yield takeLatest(T.LOGIN_REQUEST, login)
}
        