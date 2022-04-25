import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { postArticle } from '../api/articleApi.ts'
import { articleActions } from '../reducers/articleReducer.ts'

interface Article_type{
    type :string;
    payload: {
        title: string, name: string, category: string, subject: string
    }
}
interface Article_Success_type{
    type: string;
    payload: {
        title: string
    }
}
function* article(article: Article_type){
    try{
        alert('진행 3: Saga 내부 진입 성공 ' + JSON.stringify(article))
        const response: Article_Success_type = yield postArticle(article.payload)
        yield put(articleActions.articleSuccess(response))
    }catch(error){
        alert('진행 3: Saga 내부 진입 실패')
        yield put(articleActions.articleFailure(error))
    }
}
export function* watchArticle(){
    yield takeLatest(articleActions.articleRequest, article)
}
