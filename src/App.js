import React, { createContext, useContext } from 'react';

const TodoContext = createContext(null);

function TodoProvider(props) {
  return <TodoContext.Provider value={{ todo: '!!!!!!!' }} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

function Todo() {
  const { todo } = useTodoContext();
  return <h1>{todo}</h1>;
}

function App() {
  return (
    <TodoProvider>
      <Todo />
    </TodoProvider>
  );
}

export default App;
