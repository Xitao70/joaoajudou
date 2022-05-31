import React, { useState } from 'react';
import '../css/newModal.css';
import ModalSucesso from './ModalSucesso';
import ModalError from './ModalError';

function NewModal(props) {
  
  /*Função maskMoney formata a máscara do Modal com pontos e vírgulas*/
  const maskMoney = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.');
  };

  const [money, setMoney] = useState('');
  const [cartao, setCartao] = useState('');
  const [idUser, setIdUser] = useState("Bruno");
  const [modal, setModal] = useState(false);
	const [sucesso, setSucesso] = useState(false);

  let cartoes = [
	  // valid card
	  {
	    cartao_numero: '1111111111111111',
	    cvv: 789,
	    expiry_date: '01/18',
	  },
	  // invalid card
	  {
	    cartao_numero: '4111111111111234',
	    cvv: 123,
	    expiry_date: '01/20',
	  },
	];

  const submeterPagamento = () =>{

    let payload = {
      "card_number": cartao.cartao_numero,
      "cvv": cartao.cvv,
      "expiry_date": cartao.expiry_date,
    
      // Destination User ID
      "destination_user_id": idUser,
    
      // Value of the Transaction
      "value": money
    }

    console.log("payload ", payload);

    fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', { payload })
    .then(res => {
      console.log(res);
      console.log(res.data);
      setModal(true);

      if(cartao.cartao_numero == "4111111111111234"){
        setSucesso(false);
      }else{
        setSucesso(true);
      }
    })
  
  }

  function manipularCartoes(e) {
    console.log("Valor", money);
		console.log("CARDS ", cartoes[e.target.value]);
    setCartao( cartoes[e.target.value]);
  }

  const erroPagamento = () => {
    setModal(false)
  }

  return (
    <>
      {!modal &&
          <div className="matrix">
            <div className="container">
              <div className="headerModal">Pagamento para</div>
              <div className="propsSelectedUser">
                {props.usuarioSelecionado.name}
              </div>
              <button className="X" onClick={() => { props.setUsuarios({});}}>
                X
              </button>
            </div>
            <div className="inputMoney">
              <input className="price" type="text" value={money} onChange={(e) => setMoney(maskMoney(e.target.value))}
                maxLength={21}
                placeholder="R$ 0,00"
              />
            </div>
            <div className="selectedCard">
              <select className="cards" onChange={manipularCartoes}>
                <option>Número do Cartão</option>
                {cartoes.map((cartoes, index) =>                              
                  <option value={index} key={index}>
                      Cartão com o final {cartoes.cartao_numero.substr(-4)}
                  </option>                                
                )}
              </select>
            </div>
            <div className="paymentButton">
              <button className="btn-pay" onClick={submeterPagamento}>Pagar</button>
            </div>
          </div>
      }
      {modal && sucesso && <ModalSucesso/>}
      {modal && !sucesso && <ModalError changeModal={erroPagamento} />}
    </>
  );
}
export default NewModal;
