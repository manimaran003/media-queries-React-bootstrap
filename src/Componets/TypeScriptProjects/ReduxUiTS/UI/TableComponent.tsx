import React from 'react';
import {
  Grid,
  TableContainer,
  Table,
  Paper,
  TableHead,
  IconButton,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { RootStateOrAny, useDispatch } from 'react-redux';
import { DeleteBike } from '../ReduxStore/action';
export interface head{
  id:string,
  head:string
}
const header:head[]= [
  { id: '1', head: 'Ownername' },
  { id: '2', head: 'Bikename' },
  { id: '3', head: 'BikeNo' },
  { id: '4', head: 'MissingPlace' },
  { id: '5', head: 'MissingDate' },
  { id: '6', head: 'MobileNo' },
  { id: '7', head: 'BikeImg' }
];
interface EditTypes {
  userName: string;
  BikeName: string;
  BikeNo: string;
  MissingDate: string;
  MissingPlace: string;
  MobileNo: number;
  Bikeimg: string;
  id:string
}
const TableComponent: React.FC<{ BikeData: RootStateOrAny }> = (props) => {
  const { BikeData } = props;
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (_e:RootStateOrAny, id: string): void => {
    console.log('delte', id);
    dispatch(DeleteBike(id));
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {header.map((row: head) => {
                    return (
                      <>
                        <TableCell>{row.head}</TableCell>
                      </>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {(BikeData.lenght !== 0 ? BikeData : undefined).map((row: EditTypes) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell>{row.userName}</TableCell>
                      <TableCell>{row.BikeName}</TableCell>
                      <TableCell>{row.BikeNo}</TableCell>
                      <TableCell>{row.MissingPlace}</TableCell>
                      <TableCell>{row.MissingDate}</TableCell>
                      <TableCell>{row.MobileNo}</TableCell>
                      <TableCell>
                        <img
                          alt="pic"
                          src={row.Bikeimg}
                          style={{ width: '100px', height: '100px' }}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <ModeEditIcon onClick={() => navigate(`/EditBike/${row.id}`)} />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton>
                          <DeleteIcon onClick={(e:RootStateOrAny) => handleDelete(e, row.id)} />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default TableComponent;
