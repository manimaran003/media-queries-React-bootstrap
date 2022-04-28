import { ActionTypes } from '../Constants/ActionTypes';
import axios from 'axios';
import { RootStateOrAny } from 'react-redux';

export const getTrain = () => {
  return async (dispatch:RootStateOrAny) => {
    const apiUrl= "http://localhost:3006/Trains";
    axios
      .get(apiUrl)
      .then((res: RootStateOrAny) => {
        console.log('response=>get', res.data);
        dispatch({ type: ActionTypes.GETtrain, data: res.data });
      })
      .catch(() => {
        console.log('api error');
        dispatch({ type: ActionTypes.getError, data: 'error' });
      });
  };
};

export const addUser = (data: RootStateOrAny) => {
  const apiUrl = 'http://localhost:3005/users';
  return async (dispatch:RootStateOrAny) => {
    axios
      .post(apiUrl, data)
      .then(() => dispatch({ type: ActionTypes.AddSuccess, payload: 'successfully added' }))
      .catch(() => console.log('error'));
  };
};

export const deleteUser = (id: string) => {
  const apiUrl= `http://localhost:3005/users/${id}`;
  return async (dispatch:RootStateOrAny) => {
    axios
      .delete(apiUrl)
      .then(() =>
        dispatch({ type: ActionTypes.DELSuccess, payload: 'successfully Deleted' })
      )
      .catch(() => console.log('error'));
  };
};

export const getUser = () => {
  const apiUrl= `http://localhost:3005/users`;
  return async (dispatch:RootStateOrAny) => {
    axios
      .get(apiUrl)
      .then((res:RootStateOrAny) => {
        console.log('get called', res.data);
        dispatch({ type: ActionTypes.userTrain, data: res.data });
      })
      .catch((err:RootStateOrAny) => console.log('error', err));
  };
};

export const editUser = (id: string, data:RootStateOrAny) => {
  console.log('firstcall before', data);
  const apiUrl = `http://localhost:3005/users/${id}`;
  return async (dispatch: RootStateOrAny) => {
    await axios
      .put(apiUrl, data)
      .then(() => {
        console.log('firstcall after', data);
        dispatch(getUser());
        dispatch({ type: ActionTypes.EditUser, payload: 'successfully edited data' });
      })
      .catch((err:RootStateOrAny) => {
        console.log('sample');
        console.log('error', err);
      });
  };
};
