import axios from 'axios'
import { useState, useEffect } from 'react'
import tableStyle from '@/styles/Table.module.css'

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
/**
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 */