import React, {useState} from "react";
import tableStyles from '@/styles/Table.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (<table className={tableStyles.table}>
    <thead>
        <tr>
            <th><h2>카운터</h2></th>
        </tr>
    </thead>
    <tbody>
<tr >
<td><button style={{width:100}} onClick={() => setCount(count+1)}> + </button>
    <button style={{width:100}} onClick={() => setCount(count-1)}> - </button>
   </td></tr>
    <tr><td><h3>결과: {count}</h3></td></tr>
                </tbody>
            </table>
  )
}