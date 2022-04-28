import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.scss';
const HomePage = () => {
  const [data, setRender] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    let datas = localStorage.getItem('NEWFILTER');
    let newData = JSON.parse(datas);
    setRender(newData);
  }, []);
  return (
    <>
      <div className="container-fluid main-header">
        <div className="container">
          {data && (
            <>
              <div className="d-flex justify-content-center">
                <div className="card d-flex justify-content-center">
                  <div className="success">details of user now logged in this session</div>
                  <div>{data.email}</div>
                  <div>{data.fname}</div>
                </div>
              </div>
            </>
          )}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div className="card" style={{ width: '180px', height: '200px' }}>
                <button
                  onClick={() => navigate('/reducerapp')}
                  style={{ width: '180px', height: '200px' }}
                >
                  useEffect and useReducer sample app
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div className="card" style={{ width: '180px', height: '200px' }}>
                <button
                  onClick={() => navigate('/apireducer')}
                  style={{ width: '180px', height: '200px' }}
                >
                  use reducer api call train admin
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div className="card" style={{ width: '180px', height: '200px' }}>
                <button
                  onClick={() => navigate('/reduxapi')}
                  style={{ width: '180px', height: '200px' }}
                >
                  Redux sample app train booking
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div className="card" style={{ width: '180px', height: '200px' }}>
                <button
                  onClick={() => navigate('/typeEvent')}
                  style={{ width: '180px', height: '200px' }}
                >
                  typeScript use reducer sample app crud operation
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
              <div className="card" style={{ width: '180px', height: '200px' }}>
                <button
                  onClick={() => navigate('/BikeRedux')}
                  style={{ width: '180px', height: '200px' }}
                >
                  typeScript Redux Bike store app
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
