import React, { useState } from 'react';
const NewTodo: React.FC<{ handler: (text: string) => void }> = (props) => {
  const [state, setState] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setState(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    props.handler(state);
  };
  return (
    <>
      <div>
        <form>
          <label htmlFor="text">todo text</label>
          <input type="text" onChange={handleChange} value={state} />
          <button onClick={handleSubmit}>addTodo</button>
        </form>
      </div>
    </>
  );
};

export default NewTodo;
