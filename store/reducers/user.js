import { HYDRATE } from "next-redux-wrapper"
import * as T from "../types"

const initialState = {
    users: [],
    loginUser: null,
}
const userReducer = (state = initialState, action ) => {
    switch (action.type){
        case T.LOGIN_ADD_REQUEST:
      return {
        ...state,
        loginLoading: true, 
        loginSucceed: false,
        loginError: null
      }
    case T.LOGIN_ADD_SUCCESSED:
      return {
        ...state,
        loginLoading: false, 
        loginSucceed: true,
        loginError: null,
        user: action.data
      }
    case T.LOGIN_ADD_FAILED:
      return {
        ...state,
        loginLoading: false, 
        loginSucceed: false,
        loginError: action.error
      }
    default: return state
    }
}
export default userReducer