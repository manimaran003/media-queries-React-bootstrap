import React from 'react';
import TodoModel from './TodoModal';
import ListTodo from './ListTodo';
const Todos: React.FC<{ items: TodoModel[]; del: (id: string) => void }> = (props) => {
  const passDelete = (id: string): void => {
    console.log('todo2=>', id);
    props.del(id);
  };
  return (
    <div>
      {props.items.map((item) => {
        return (
          <ul key={item.id}>
            <ListTodo data={item} pass={passDelete} />
          </ul>
        );
      })}
    </div>
  );
};

export default Todos;
