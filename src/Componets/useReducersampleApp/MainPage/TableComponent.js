import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ModalComponent from '../UI/ModalComponent';
import AuthContext from './auth-context';
const HeadRow = ['id', 'productname', 'productprice'];
const TableComponent = () => {
  let authctx = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [editData, setEditdata] = useState({});
  const handleDelete = (item) => {
    authctx.delete(item);
  };
  const handleEdit = (item) => {
    setOpen(true);
    setEditdata(item);
  };
  const SendToReducer = (data) => {
    authctx.edit(data);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {HeadRow.map((val) => {
                return (
                  <React.Fragment key={val.id}>
                    <TableCell>{val}</TableCell>
                  </React.Fragment>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {authctx.products.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell key={item.id}>{item.id}</TableCell>
                  <TableCell>{item.ProductName}</TableCell>
                  <TableCell>{item.ProductPrice}</TableCell>
                  <TableCell>
                    <EditIcon onClick={() => handleEdit(item)} />
                  </TableCell>
                  <TableCell>
                    <DeleteIcon onClick={() => handleDelete(item)} />
                  </TableCell>
                </TableRow>
              );
            })}
            {ReactDOM.createPortal(
              <ModalComponent
                open={open}
                close={handleClose}
                pass={editData}
                NewData={SendToReducer}
              />,
              document.getElementById('overlay')
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableComponent;
