import { put, takeLatest} from 'redux-saga/effects'
import { loginActions } from '../reducers/loginReducer'
import { postLogin } from '../api/loginApi'

interface UserLoginType{
    type :string
    payload: {userid: string, password: string}
}
interface UserLoginSuccessType{
    type: string
    payload:{userid: string}
}
function* login(login: UserLoginType){
    try{
        alert(' 진행 3: saga내부 join 성공  '+ JSON.stringify(login))
        const response: UserLoginSuccessType = yield postLogin(login.payload)
        yield put(loginActions.loginSuccess(response))
    }catch(error){
        alert('진행 3: saga내부 join 실패  ') 
         yield put(loginActions.loginFailure(error))
    }
}
export function* watchLogin(){
    yield takeLatest(loginActions.loginRequest, login)
}