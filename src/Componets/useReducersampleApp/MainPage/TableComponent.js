import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
const HeadRow = [
    "id",
    "productname",
    "productprice"
]

const TableComponent = (props) => {

const handleDelete=(item)=>{
    console.log("clicked")
    props.DeleteData(item)
}
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            {
                                HeadRow.map((val) => {
                                    return (
                                        <React.Fragment key={val.id}>
                                            <TableCell>
                                                {val}
                                            </TableCell>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((item) => {
                                return (
                                    <TableRow>
                                        <TableCell key={item.id}>
                                            {item.id}
                                        </TableCell>
                                        <TableCell>
                                            {item.ProductName}
                                        </TableCell>
                                        <TableCell>
                                            {item.ProductPrice}
                                        </TableCell>
                                        <TableCell>
                                            <DeleteIcon onClick={()=>handleDelete(item)}/>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableComponent