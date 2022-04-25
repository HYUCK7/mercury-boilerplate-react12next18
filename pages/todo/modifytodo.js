import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

export default function ModifyTodo(){
    const [todo, setTodo] = useState({task: '', completed: ''})
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
            if(inputs) dispatch(modifyTodo(inputs))
        }}>
        <table className={tableStyle.table}>
            <thead>
                <tr>
                    <th><h1>일정수정</h1></th>
                </tr>
            </thead>
            <tbody>
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
                        <label htmlFor='completed'>Completed</label>
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