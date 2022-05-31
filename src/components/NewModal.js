import React, { useState } from 'react';
import '../css/newModal.css';

function NewModal(props) {
  
  /*Função maskMoney formata a máscara do Modal com pontos e vírgulas*/
  const maskMoney = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.');
  };

  const [money, setMoney] = useState('');
  const [cartaoValido, setCartaoValido] = useState('');

  // pay = () => {
  //     bodyForm = newFormData;
  //     bodyForm.append('transactionPayLoad', JSON.stringify({
  //        // Card Info
  // card_number: string,
  // cvv: number,
  // expiry_date: string,

  // // Destination User ID
  // destination_user_id: number,

  // // Value of the Transaction
  // value: number

  //     }))

  //     fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989',{
  //       method: 'POST',
  //       body: 
  //     })
  // }

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
            /*chamada da função que formata o input*/
            onChange={(e) => setMoney(maskMoney(e.target.value))}
            maxLength={21}
            placeholder="R$ 0,00"
          />
        </div>
        <div className="selectedCard">
          <select className="cards" onchange={(e) =>(cartaoValido(e.target.value))}>
            <option className="validCard" value="1111111111111111">
              Cartão com final 1111
            </option>
            <option className="invalidCard" value="4111111111111234">
              Cartão com final 1234
            </option>
          </select>
        </div>
        <div className="paymentButton">
          <button className="btn-pay"  >Pagar</button>
        </div>
      </div>
    </>
  );
}
export default NewModal;
