import React, { useState, useContext} from "react";
import ReactDOM from 'react-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow ,Tooltip} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const HeadRow = [
    "id",
    "productname",
    "productprice"
]
const TableComponent = () => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default TableComponent