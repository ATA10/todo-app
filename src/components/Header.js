import React from 'react';

const Header = ({ addTodo }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(e.target.value);
      e.target.value = '';
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input 
        className="new-todo" 
        placeholder="What needs to be done?" 
        onKeyPress={handleKeyPress} 
        autoFocus 
      />
    </header>
  );
};

export default Header;
