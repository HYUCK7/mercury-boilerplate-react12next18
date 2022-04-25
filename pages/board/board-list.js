import React, {useState} from 'react'
import style from "./styles/boardForm.module.css"

export default function TeamForm(){
        const [inputs, setInputs] = useState({})
        const {TeamId1, TeamId2, house, TeamName,
             orgYyyy, stadiumName, address, tel } = inputs
        
        const handleChange = e => {
            e.preventDefault
            const {value, name} = e.target
            setInputs({...inputs, [name]: value})
        }
    
        const handleSubmit = e => {
            e.preventDefault()
            alert(`등록할 팀 정보 : ${JSON.stringify(inputs)}`)
            axios.post('http://localhost:5000/api/Team/write', inputs) 
            .then(res=> {
                alert(JSON.stringify( res.data.result))
            })
            .catch(err => alert(err))
        }
        return (<>
            <div className={style.container}>
                <form action="">
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamId1">팀 ID1</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="TeamId1" name="TeamId1" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamId2">팀 ID2</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="TeamId2" name="TeamId2" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="house">연고지</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="house" name="house" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="teamName">팀명</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="TeamName" name="TeamName" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="orgYyyy">창단년도</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="orgYyyy" name="orgYyyy" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="stadiumName">스타디움 명칭</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="stadiumName" name="stadiumName" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="address">주소</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="address" name="address" onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.col25}>
                        <label className={style.label} htmlFor="tel">전화번호</label>
                    </div>
                    <div className={style.col75}>
                        <input type="text" className={style.inputText} id="tel" name="tel" onChange={handleChange}/>
                    </div>
                </div>
                <br/>
                <div className={style.row}>
                    <input type="submit" className={style.inputSubmit} onClick = {handleSubmit}
                    value="Submit"/>
                </div>
                </form>
                </div>
        </>)
    }
