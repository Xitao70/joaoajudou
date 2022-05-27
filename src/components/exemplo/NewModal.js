import React, { useState } from "react";
import "../../css/newModal.css";

const maskMoney = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1,$2")
    .replace(/(?=(\d{3})+(\D))\B/g, ".");
};
let cardTransaction = () => {
  fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
    method: 'POST',
    body: JSON.stringify ({
       // valid card
        {
          card_number: '1111111111111111',
          cvv: 789,
          expiry_date: '01/18',
        },
        // invalid card
        {
          card_number: '4111111111111234',
          cvv: 123,
          expiry_date: '01/20',
        },
      
      
    })
  }) .then((resp))


}

function NewModal(props) {
  const [money, setMoney] = useState("");
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
            placeholder="R$ 0,00"
          />
        </div>
        <div className="selectedCard">
          <select className="cards">
            <option className="validCard">Cartão com final 1111</option>
            <option className="invalidCard">Cartão com final 0123</option>
          </select>
        </div>
        <div className="paymentButton">
          <button className="btn-pay" onClick={cardTransaction}>Pagar</button>
        </div>
      </div>
    </>
  );
}
export default NewModal;

