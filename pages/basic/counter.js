import React, { useState } from "react";
import styles from "./styles/counter.module.css";

export default function Counter (){
    const [count, setCount] = useState(0);
    return<>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count+1)}>+</button><br/>
        <button onClick={()=> setCount(count-1)}>-</button><br/>
        <div>{count}</div>
        </>
}