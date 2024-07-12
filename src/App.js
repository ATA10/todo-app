import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn JavaScript', completed: true },
    { text: 'Learn React', completed: false },
    { text: 'Have a life!', completed: false }
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <Main todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <Footer todos={todos} clearCompleted={clearCompleted} />
    </section>
  );
};

export default App;
