import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="container">
        <button className="close">Fechar</button>
        <div className="conteudo">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
