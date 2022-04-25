import React,{useEffect, useState} from 'react'
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import NavStyles from "../common/styles/Nav.module.css"
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";

export default function Nav(){
  const basicUrls = ["/basic/counter","/basic/calc","/basic/bmi"]
  const basicSubTitle = ["카운터","계산기","BMI"]
  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])
  useEffect(()=> {
    const loginUser = localStorage.getItem("loginUser")
    if (loginUser === null){
      setUserUrls (["/user/join","/user/login"])
      setUserSubTitle (["회원가입","로그인"])
    } else {
      setUserUrls ( ["/user/logout","/user/profile","/user/updateUser","/user/withdrawUser","/user/getUsers"] )
      setUserSubTitle ( ["로그아웃","프로필","회원수정","회원탈퇴","회원목록"] )
    }
  }, [])
  const todoUrls = ["/todo/addTodo","/todo/getTodos","/todo/modifyTodo","/todo/removeTodo"]
  const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
  const gameUrls = ["/game/addGame","/game/getGames","/game/modifyGame","/game/removeGame"]
  const gameSubTitle = ["게임등록","게임목록","게임수정","게임삭제"]
  //const teamUrls = ["/team/addTeam","/team/getTeams","/team/modifyTeam","/team/removeTeam"]
  //const teamSubTitle = ["팀등록","팀목록","팀수정","팀삭제"]
  const boardUrls = ["/board/addArticle","/board/getArticles","/board/modifyArticle","/board/removeArticle"]
  const boardSubTitle = ["글등록","글목록","글수정","글삭제"]
  
  return (
    <table className={NavStyles.table}>
      <thead></thead>
      <tbody>
      <tr className={NavStyles.tr}>
      <td className={NavStyles.td}>
        <a href = {"/"}>{"HOME"}</a>
        <SubMenu title={"기본"} urls={basicUrls} subTitles={basicSubTitle}></SubMenu>
        <SubMenu title={"사용자"} urls={userUrls} subTitles={userSubTitle}></SubMenu>
        <SubMenu title={"투두"} urls={todoUrls} subTitles={todoSubTitle}></SubMenu>
        <SubMenu title={"게임"} urls={gameUrls} subTitles={gameSubTitle}></SubMenu>
        <SubMenu title={"게시판"} urls={boardUrls} subTitles={boardSubTitle}></SubMenu>
        </td>
      </tr>
      </tbody>
    </table>
  );
}
const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {props.urls.map(function(url, i){
            return <MenuItem onClick={handleClose} key={i}><Link href={url} >{props.subTitles[i]}</Link></MenuItem>
          })}
      </Menu></>
}