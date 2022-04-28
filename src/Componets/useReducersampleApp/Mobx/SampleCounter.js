import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import axios from 'axios';

const SampleCounter = observer(({ store }) => {
  const [state, setState] = useState({
    id: Date.now(),
    name: '',
    password: ''
  });
  console.log('srore', store);
  const handleSubmit = (e) => {
    e.preventDefault();
    const fetched = async () => {
      await axios
        .post('http://localhost:3002/data', state)
        .then((res) => {
          console.log(res.data.name);
          runInAction(() => (store.result = res.data.name));
          console.log(store, 'hai');
        })
        .catch((err) => console.log(err));
    };
    fetched();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  //console.log(store.getResult()?store.getResult().data.name:"")
  return (
    <div style={{ marginTop: '100px' }}>
      <input placeholder="username" name="name" value={state.name} onChange={handleChange} />
      <input
        placeholder="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>submit</button>
      {store.getResult()}
    </div>
  );
});
export default SampleCounter;
