import React, { useState, useContext} from "react";
import ReactDOM from 'react-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow ,Tooltip} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModalComponent from "../UI/ModalComponent";
import AuthContext from "./auth-context";
const HeadRow = [
    "id",
    "productname",
    "productprice"
]
const TableComponent = () => {
    let authctx = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const handleDelete = (item) => {
        authctx.delete(item)
    }
    const handleEdit = () => {
        setOpen(true)
    }
    const SendToReducer = (data) => {
        authctx.edit(data)
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
                            authctx.products.map((item) => {
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
                                         {ReactDOM.createPortal(<ModalComponent open={open} close={handleClose} pass={item} NewData={SendToReducer} />,document.getElementById("overlay"))}
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