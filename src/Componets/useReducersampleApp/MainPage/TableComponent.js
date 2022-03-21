import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModalComponent from "../UI/ModalComponent";
const HeadRow = [
    "id",
    "productname",
    "productprice"
]


const TableComponent = (props) => {
    const [open, setOpen] = useState(false)
    const handleDelete = (item) => {
        props.DeleteData(item)
    }
    const handleEdit = () => {
        setOpen(true)
    }
    const SendToReducer = (data) => {
        props.parent(data)
    }
    const handleClose = () => {
        setOpen(false)
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
                                            <EditIcon onClick={() => handleEdit()} />
                                            <ModalComponent open={open} close={handleClose} pass={item} NewData={SendToReducer} />
                                        </TableCell>
                                        <TableCell>
                                            <DeleteIcon onClick={() => handleDelete(item)} />
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