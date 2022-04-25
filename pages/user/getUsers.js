import tableStyles from '../common/styles/table.module.css'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
const Table = ({columns, colspan, data}) =>{
    return(
        <table className={tableStyles.table}>
          <thead>
            <tr className={tableStyles.tr}>
            {columns.map((column, index) => 
              <th className={tableStyles.td} key={index}>{column}</th>
            )}
            </tr>
          </thead>
          <tbody>
              { data.length == 0 ? <tr className={tableStyles.tr}> <td colSpan={colspan} className={tableStyles.td}>데이터가없습니다.</td>
              </tr>
              : data.map((user) => (
                <tr className = {tableStyles.tr} key = {user._id}>
                  <td className={tableStyles.td}>{user.userid}</td>
                    {/**<Link href={{pathname:`/user/[name]`,
                      query:{selectedUser: 'test'}}} as = {`/user/${user.name}`}>
                      <a>{user.name}</a>
                    </Link>
                    */}
                  <td className={tableStyles.td}>{user.name}</td>
                  <td className={tableStyles.td}>{user.password}</td>
                  <td className={tableStyles.td}>{user.email}</td>
                  <td className={tableStyles.td}>{user.phone}</td>
                  <td className={tableStyles.td}>{user.birth}</td>
                  <td className={tableStyles.td}>{user.address}</td>
                </tr>
              ))}
          </tbody>
        </table>
      );
}
export default function GetUsers(){
    const columns = ["userid", "name", "password", "email", "phone", "birth", "address"];
  const [data, setData] = useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:5000/user/userlist').then(res=>{
      setData(res.data.users)
    }).catch(err=>{})
  }, [])

  return (<>
      <h1>사용자목록</h1>
      <div className={tableStyles.td}>
      <Table columns={columns} colspan = {7} data = {data}/>
      </div>
      </>
)
}