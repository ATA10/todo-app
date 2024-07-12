import React from 'react';

const Footer = ({ todos, clearCompleted }) => {
  const remaining = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remaining}</strong> items left
      </span>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
