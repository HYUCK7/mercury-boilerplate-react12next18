import axios from "axios"
import { useEffect , useState} from "react"
import tableStyle from "../common/styles/table.module.css"
const Table = ({columns, colspan ,data}) => {
    return(
        <table className={tableStyle.table}>
            <thead>
            <tr className={tableStyle.table}></tr>
            <tr className={tableStyle.tr}></tr>
            {columns.map((column, index) =>
            <th className={tableStyle.td} key = {index}>{column}</th>
            )}
            </thead>
            <tbody>
                {data.length == 0? <tr className={tableStyle.tr}>
                    <td colSpan={colspan} className={tableStyle.td}>No Data</td></tr>
                    : data.map((todo) => (
                        <tr className={tableStyle.td} key={todo.id}>
                            <td className={tableStyle.td}>{todo.userid}</td>
                            <td className={tableStyle.td}>{todo.task}</td>
                            <td className={tableStyle.td}>{todo.completed}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
export default function getTodos(){
    const columns = ["userid", "task", "completed"]
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/todo/todolist').then(res=>{
            setData(res.data.todos)
        }).catch(err=>{}) }, [])
    return(<>
    <h1>TodoList</h1>
    <div className={tableStyle.td}>
        <Table columns={columns} colspan = {3} data = {data}/>
    </div>
    </>
)}

