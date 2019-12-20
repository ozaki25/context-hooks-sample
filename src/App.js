import React, { createContext, useContext } from 'react';

const TodoContext = createContext(null);

function TodoProvider(props) {
  return <TodoContext.Provider value={{ hello: '!!!!!!!' }} {...props} />;
}

function useTodoContext() {
  return useContext(TodoContext);
}

function Hello() {
  const { hello } = useTodoContext();
  return <h1>{hello}</h1>;
}

function App() {
  return (
    <TodoProvider>
      <Hello />
    </TodoProvider>
  );
}

export default App;
