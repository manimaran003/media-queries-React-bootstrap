import { ActionTypes } from '../../../useReducersampleApp/ReduxFIles/Constants/ActionTypes';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';

export const getBike = () => {
  return async (dispatch:RootStateOrAny) => {
    await axios
      .get('http://localhost:3009/BIKE')
      .then((res:RootStateOrAny) => {
        console.log('res', res);
        dispatch({ type: ActionTypes.GETAPI, payload: res.data });
      })
      .catch((err:RootStateOrAny) => {
        console.log(err);
      });
  };
};
export const AddBike = (data:RootStateOrAny) => {
  console.log(data);
  return async (dispatch:RootStateOrAny) => {
    await axios
      .post('http://localhost:3009/BIKE', data)
      .then((res:RootStateOrAny) => {
        console.log('res', res);
        dispatch({ type: ActionTypes.POSTAPI, payload: res.data });
      })
      .catch((err:RootStateOrAny) => {
        console.log(err);
      });
  };
};

export const EditBike = (data:RootStateOrAny) => {
  console.log('da', data);
  return async (dispatch:RootStateOrAny) => {
    await axios
      .put(`http://localhost:3009/BIKE/${data[1]}`, data[0])
      .then(() => {
        dispatch({ type: ActionTypes.PUTAPI, payload: 'successfully edited' });
      })
      .catch((err:RootStateOrAny) => {
        console.log(err);
      });
  };
};

export const DeleteBike = (id: string) => {
  console.log('da', id);
  return async (dispatch:RootStateOrAny) => {
    await axios
      .delete(`http://localhost:3009/BIKE/${id}`)
      .then(() => {
        dispatch({ type: ActionTypes.DELETE, payload: 'successfully deleted' });
        dispatch(getBike());
      })
      .catch((err:RootStateOrAny) => {
        console.log(err);
      });
  };
};
