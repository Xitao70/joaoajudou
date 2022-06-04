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
  const [idUser, setIdUser] = useState('Bruno');
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
  var inputDoValor;
  var selectCartao;

  const submeterPagamento = () => {
    //aqui vai um if  cartao  para validação do campo input
    // tipo: if cartao   vazio "" etc etc
    if (money === '') {
      inputDoValor.focus();
    } else if (cartao === '') {
      selectCartao.focus();
    } else {
      let payload = {
        card_number: cartao.cartao_numero,
        cvv: cartao.cvv,
        expiry_date: cartao.expiry_date,

        // Destination User ID
        destination_user_id: idUser,

        // Value of the Transaction
        value: money,
      };

      console.log('payload', payload);

      fetch('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', {
        payload,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setModal(true);

          if (cartao.cartao_numero === '4111111111111234') {
            setSucesso(false);
          } else {
            setSucesso(true);
          }
        });
    }
  };

  function manipularCartoes(e) {
    console.log('Valor', money);
    console.log('CARDS ', cartoes[e.target.value]);
    setCartao(cartoes[e.target.value]);
  }
  const sucessoModal = () => {
    setModal(false);
  };
  const erroPagamento = () => {
    setModal(false);
  };

  return (
    <div className="modal">
      <div className="matrix">
        {!modal && (
          <div>
            <div className="container">
              <div className="headerModal"><h2>Pagamento para</h2></div>
              <div className="propsSelectedUser"><h2>
                {props.usuarioSelecionado.name}
              </h2>
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
                ref={(input) => (inputDoValor = input)}
                value={money}
                onChange={(e) => setMoney(maskMoney(e.target.value))}
                maxLength={21}
                placeholder="R$ 0,00"
              />
            </div>
            <div className="selectedCard">
              <select
                className="cards"
                ref={(select) => (selectCartao = select)}
                onChange={manipularCartoes}
              >
                <option>Número do Cartão</option>
                {cartoes.map((cartoes, index) => (
                  <option value={index} key={index}>
                    Cartão com o final {cartoes.cartao_numero.substr(-4)}
                  </option>
                ))}
              </select>
            </div>
            <div className="paymentButton">
              <button className="btn-pay" onClick={submeterPagamento}>
                Pagar
              </button>
            </div>
          </div>
        )}
      {modal && sucesso && <ModalSucesso closeModal={ () =>  props.setUsuarios({})} />}
      {modal && !sucesso && <ModalError changeModal={erroPagamento} closeModal={ () =>  props.setUsuarios({})} />}
      </div>
    </div>
  );
}
export default NewModal;
