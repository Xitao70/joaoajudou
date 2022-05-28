import React, { useState } from 'react';
import '../css/newModal.css';

const maskMoney = (value) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .replace(/(?=(\d{3})+(\D))\B/g, '.');
};

function NewModal(props) {
  const [money, setMoney] = useState('');
  return (
    <>
      <div className="matrix">
        <div className="container">
          <div className="headerModal">Pagamento para</div>
          <div className="propsSelectedUser">
            {props.usuarioSelecionado.name}
          </div>
          <button
            className="X"
            onClick={() => {
              props.setUsuarios({});
            }}
          >
            X
          </button>
        </div>
        <div className="inputMoney">
          <input
            className="price"
            type="text"
            value={money}
            onChange={(e) => setMoney(maskMoney(e.target.value))}
            maxLength={30}
            placeholder="R$ 0,00"
          />
        </div>
        <div className="selectedCard">
          <select className="cards">
            <option className="validCard" value="1111111111111111">
              Cartão com final 1111
            </option>
            <option className="invalidCard" value="4111111111111234">
              Cartão com final 1234
            </option>
          </select>
        </div>
        <div className="paymentButton">
          <button className="btn-pay">Pagar</button>
        </div>
      </div>
    </>
  );
}
export default NewModal;
