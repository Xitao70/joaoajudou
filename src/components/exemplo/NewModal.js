import '../../css/newModal.css';
function NewModal(props) {
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
          <input className="price" type="text" placeholder="R$ 0,00"></input>
        </div>
        <div className="selectedCard">
          <select className="cards">
            <option className="validCard">Cartão com final 1111</option>
            <option className="invalidCard">Cartão com final 0123</option>
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
