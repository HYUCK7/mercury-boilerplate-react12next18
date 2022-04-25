import { all } from 'redux-saga/effects'
import { watchJoin, watchLogin } from './userSaga.ts'
import { watchTodo } from './todoSaga.ts'
import { watchArticle } from './articleSaga.ts'
//import { watchLogin } from './loginSaga'

export default function* rootSaga() {
    yield all([watchJoin(), watchTodo(), watchArticle(), watchLogin()])
}