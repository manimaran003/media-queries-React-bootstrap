import React, { useState, useEffect } from 'react';
const initialValues = {
  username: '',
  password: ''
};
const LoginPage = () => {
  const [state, setState] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [data, storageData] = useState();
  const [showModal, setModal] = useState(false);
  useEffect(() => {
    getLocalStorage();
  }, []);
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const handleValidation = () => {
    let Errors = {};
    const { username, password } = state;
    if (username === '') {
      Errors.username = 'please input your username!';
    }

    if (password === '') {
      Errors.password = 'please input your password!';
    }

    return Errors;
  };
  const getLocalStorage = () => {
    let datas = localStorage.getItem('NEWDATA');
    storageData(JSON.parse(datas));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = handleValidation();
    if (Object.keys(error).length === 0) {
      if (!data) {
        setModal(true);
      }
      const saveData = data?.find(
        (val) => val.email === state.username && val.password === state.password
      );
      const { email, password } = saveData ? saveData : '';

      if (email === state.username && password === state.password) {
        setModal(false);
        localStorage.setItem('NEWFILTER', JSON.stringify(saveData));
      } else {
        setModal(true);
      }
    } else {
      console.log(error);
      setErrors(error);
    }
  };
  return (
    <>
      <div className="container textColor">
        {showModal && (
          <p style={{ color: 'green', fontSize: '18px' }}>
            please check username & password or signup account
          </p>
        )}
        <div className="">
          <form>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="email"
                name="username"
                value={state.username}
                onChange={handleChange}
                className="form-control is-invalid"
                placeholder="Username"
                id="exampleFormControlInput1"
              />
              <div className="invalid-feedback" id="err1">
                {errors.username}
              </div>
            </div>
            <label className="form-label">Password</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                className="form-control is-invalid"
                placeholder="Password"
                aria-label="Username"
                id="exampleFormControlInput2"
                aria-describedby="basic-addon1"
              />
              <div className="invalid-feedback" id="err2">
                {errors.password}
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3">
              <p>Forgot Password ?</p>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-lg btn-primary login-btn"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        {/* <div className="d-flex justify-content-center mt-3">
                    <p>Dont have an account? <Link to="/Signup">Signup</Link></p>
                </div> */}
      </div>
    </>
  );
};

export default LoginPage;
