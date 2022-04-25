import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tableStyle from '../common/styles/table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'

export default function AddTodo(){
    const [todo, setTodo] = useState({userid: '', task: '', completed: ''})
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setTodo({...todo, [name]: value})
    }
    return(
        <div className = "todoapp stack-large">

        <form onSubmit={ e => {
            e.preventDefault
            alert(' 진행 1: 할일 등록');
            dispatch(todoActions.taskRequest(todo))
            setTodo({userid: '', task: '', completed: ''})
        }}>
        <table className={tableStyle.table}>
            <thead>
                <tr>
                    <th><h1>일정추가</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <label>작성자</label>
                    </td>
                    <td>
                    <input type='text' onChange={handleChange} name = 'userid' placeholder="사용자 아이디 입력"/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="task">할일</label>
                    </td>
                    <td>
                        <input type='textarea' id='task' name="task" onChange={handleChange} style={{height:200 + "px"}}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>Completed</label>
                    </td>
                    <td>
                        <input type='text' onChange={handleChange} name = 'completed'/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}><input type="submit" value="SUBMIT"/></td>
                </tr>
            </tbody>
        </table>
        </form>

        </div>
    )
}