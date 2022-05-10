import React from 'react';

const Modal = ({ closeBtn }) => {
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="titlePg">
          <span className="txtPg">Pagamento para </span>
          <button className="btnFechar" onClick={closeBtn}>
            x
          </button>
        </div>

        <input className="fieldPayment" type="text" placeholder="R$: 0,00" />
        <select className="select">
          <option> Teste 1</option>
          <option> Teste 2</option>
        </select>

        <button className="btnPagar">Pagar</button>
      </div>
    </div>
  );
};

export default Modal;
