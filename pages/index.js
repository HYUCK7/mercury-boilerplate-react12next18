import axios from "axios";
import React, { useEffect } from 'react';
import Image from "next/image";
import tableStyles from '@/styles/Table.module.css'

const Button = ({ onClick }) => (
  <button onClick={onClick}>현재 시간</button>
);

export default function Home() {
  useEffect(() =>{
  const loginUser = localStorage.getItem("loginUser")
  if(loginUser === null){
    axios.get("http://localhost:5000/api/now").then((res) => {
      var data = res.data
      document.getElementById("timeZone").innerHTML = '<h1>현재시간 : '+data.시간+'<h1>'
  })
}else{
  const currentUser = JSON.parse(loginUser)
  document.getElementById("timeZone").innerHTML = '<h1>환영합니다: '+currentUser.name+'<h1>'
}}, [])
  /**const onClick = useCallback(() => {
    axios.get("http://localhost:5000/api/now").then((res) => {
      alert(JSON.stringify(res.data))
      var data = res.data;
      document.getElementById("timeZone").innerHTML = '<h1>시간: '+data.시간+'<h1>'
    });
  });*/
  return (<>
    <table className={tableStyles.table}>
    <thead>
        <tr>
            <th><h2>HOME</h2></th>
        </tr>
    </thead>
    <tbody>
        <tr>
          <td>
              <div id="timeZone"></div>
          </td>
        </tr>
    </tbody>
  </table>
  </>
  )
}