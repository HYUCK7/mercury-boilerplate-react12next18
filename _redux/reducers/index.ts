import { combineReducers } from "redux";
import adminReducer from './adminReducer.ts'
import basicReducer from './basicReducer.ts'
import articleReducer from './articleReducer.ts'
import gameReducer from './gameReducer.ts'
import todoReducer from './todoReducer.ts'
import userReducer from './userReducer.ts'
import loginReducer from './loginReducer.ts'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    articleReducer,
    gameReducer,
    todoReducer,
    userReducer,
    loginReducer
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>