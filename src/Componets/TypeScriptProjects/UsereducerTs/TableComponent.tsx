import React, { useState, useContext } from "react";
import ReactDOM from 'react-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DataModel from './DataModel'
const HeadRow = [
    "username",
    "eventname",
    "member",
    "TimeAllot",
    "",
    ""
]
const TableComponent: React.FC<{ store: any }> = (props) => {
    console.log(props.store)
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            {
                                HeadRow.map((item) => {
                                    return (
                                        <>
                                            <TableCell align="left">{item}</TableCell>
                                        </>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.store.map((row: DataModel) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell component="th" scope="row" align="left">
                                    {row.username}
                                </TableCell>
                                <TableCell align="left">{row.eventName}</TableCell>
                                <TableCell align="left">{row.members}</TableCell>
                                <TableCell align="left">{row.time}</TableCell>
                                <TableCell align="left"><EditIcon /></TableCell>
                                <TableCell align="left"><DeleteIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default TableComponent