import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext(null);

function TodoProvider(props) {
  const [todo, setTodo] = useState('!!!!!!!!');
  return <TodoContext.Provider value={{ todo, setTodo }} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

function ShowTodo() {
  const { todo } = useTodoContext();
  return (
    <section>
      <h1>{todo}</h1>
    </section>
  );
}

function InputTodo() {
  const { todo, setTodo } = useTodoContext();
  const onChange = e => setTodo(e.target.value);
  return (
    <section>
      <input value={todo} onChange={onChange} />
    </section>
  );
}

function App() {
  return (
    <TodoProvider>
      <ShowTodo />
      <InputTodo />
    </TodoProvider>
  );
}

export default App;
