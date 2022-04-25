import axios from 'axios'
import { useState, useEffect } from 'react'
import tableStyle from '../common/styles/table.module.css'

export default function GetArticles(){
    const columns = ["title", "name", "category", "subject"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/article/getArticles').then(res=>{
            setData(res.data.articles)
        }).catch(err=>{})
    }, [])
    return (<>
        <h1>리스트</h1>
        {count!=0 && <h3>입력 게시글: {count}개</h3>}
        <div className={tableStyle.td}>
        <Table columns={columns} colspan = {4} data = {data}/>
        </div>
    </>)
}

const Table = ({columns, colspan, data}) => {
    return(
        <table className= {tableStyle.table}>
            <thead>
                <tr className={tableStyle.tr}>
                    {columns.map((column)=>(
                        <th key={columns.id} className = {tableStyle.tr}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length == 0? <tr className={tableStyle.tr}><td colSpan={colspan} className={tableStyle.td}>NODATA</td>
                </tr> : data.map((article) => (
                    <tr className = {tableStyle.tr} key = {article._id}>
                    <td className={tableStyle.td}>{article.title}</td>
                    <td className={tableStyle.td}>{article.name}</td>
                    <td className={tableStyle.td}>{article.category}</td>
                    <td className={tableStyle.td}>{article.subject}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    )
}
