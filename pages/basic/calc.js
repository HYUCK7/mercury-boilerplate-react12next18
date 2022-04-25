import axios from "axios";
import React, { useState } from "react";
export default function Calc() {
    const [inputs, setInputs] = useState({})
    const { num1, opcode, num2} = inputs;

    const onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/basic/calc', inputs)
        .then(res =>{
            const calc = res.data
            alert(`값 확인 : ${JSON.stringify(calc)}`)
            document.getElementById('result-span').innerHTML = `
            <h3>숫자1: ${calc.num1}</h3>
            <h3>연산기호 : ${calc.opcode}</h3>
            <h3>숫자2: ${calc.num2}</h3>
            <h3>결과: ${calc.res}</h3>
            `
        })
        .catch(err=> alert(err))
    }

    return (<>
        <h1>계산기</h1>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="" >num1</label>
            <input id = "num1" name="num1" type="text" onChange={onChange} /> <br />

            <label htmlFor="">연산자</label>
            <select id = "opcode" name="opcode" type="text" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label htmlFor="">num2</label>
            <input id= "num2" name="num2" type="text" onChange={onChange} /><br />
            <div>숫자 1: {inputs[`num1`]} 연산기호: {inputs[`opcode`]} 숫자2: {inputs[`num2`]}</div>
            <div>
                <input type = "submit" value = "Submit" input/>
            </div>
           </form>
           <div> 결과 : <span id = "result-span"></span></div>
    </>
    )
}