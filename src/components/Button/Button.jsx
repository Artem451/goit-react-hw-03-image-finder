import React from 'react';

function Button({ onClick }) {
  return (
    <div className="Conteiner">
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default Button;
