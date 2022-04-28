import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DataModel from './DataModel';
import { RootStateOrAny } from 'react-redux';
const HeadRow = ['username', 'eventname', 'member', 'TimeAllot', '', ''];
const TableComponent: React.FC<{ store: RootStateOrAny; delete: (id: string) => void }> = (props) => {
  console.log(props.store);
  const navigate = useNavigate();
  const handleDelete = (e: React.MouseEvent<SVGSVGElement>, id: string) => {
    e.preventDefault();
    props.delete(id);
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {HeadRow.map((item) => {
                return (
                  <>
                    <TableCell align="left">{item}</TableCell>
                  </>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.store.map((row: DataModel) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="left">
                  {row.username}
                </TableCell>
                <TableCell align="left">{row.eventName}</TableCell>
                <TableCell align="left">{row.members}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">
                  <EditIcon onClick={() => navigate(`/EditEvent/${row.id}`)} />
                </TableCell>
                <TableCell align="left">
                  <IconButton>
                    <DeleteIcon onClick={(e) => handleDelete(e, row.id)} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default TableComponent;
