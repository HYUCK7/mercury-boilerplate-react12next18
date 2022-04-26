import React, {useState} from "react"
import { useDispatch } from "react-redux"
import tableStyle from '@/styles/Table.module.css'
import { articleActions} from '../../redux/reducers/articleReducer.ts'
export default function AddArticle(){
    const [input, setInputs] = useState({})
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...input, [name]: value})
    }
    return(<form onSubmit={ e => {
        e.preventDefault()
        dispatch(articleActions.articleRequest(input))
    }}>
    <table className={tableStyle.table}>
    <thead>
        <tr>
            <th colSpan={4}><h2>게시판글쓰기</h2></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><label>제목</label></td>
            <td><input type = 'text' onChange={handleChange}
                id = 'title' name= 'title' placeholder="제목입력"/>
            </td>
        </tr>
        <tr>
            <td>
                <label>작성자</label>
            </td>
            <td>
                <input type="text" onChange={handleChange}
                id = "name" name = "name" placeholder="게시글 작성자 이름 입력"/>
            </td>
        </tr>
        <tr>
            <td>
                <label htmlFor="team">주제</label>
            </td>
            <td>
                <select id="category" name ="category" onChange={handleChange}>
                    <option value = "">주제 선택</option>
                    <option value="K09">영화</option>
                    <option value="K02">도서</option>
                    <option value="K04">여행</option>
                </select>
            </td>
        </tr>

        <tr>
            <td>
                <label htmlFor="subject">내용</label>
            </td>
            <td>
                <input type="textarea" id = "subject" name ="subject" onChange={handleChange} style={{height:200 + "px"}}></input>
            </td>
        </tr>
        <tr>
            <td colSpan={2}><input type="submit" value="SUBMIT"></input></td>
        </tr>
    </tbody>
    </table>
    </form>)
}