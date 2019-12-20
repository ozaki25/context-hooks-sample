import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext(null);

function TodoProvider(props) {
  const [todo, setTodo] = useState('!!!!!!!!');
  return <TodoContext.Provider value={{ todo, setTodo }} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

function Todo() {
  const { todo, setTodo } = useTodoContext();
  const onChange = e => setTodo(e.target.value);
  return (
    <section>
      <h1>{todo}</h1>
      <input value={todo} onChange={onChange} />
    </section>
  );
}

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;
