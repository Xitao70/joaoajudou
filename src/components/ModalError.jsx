import '../css/modalError.css';
export default function ModalError(props) {
  const FecharModal = () => {
    props.changeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-sucesso">
        <div className="modal-error-titulo">
          <h2>Recibo de pagamento</h2>
        </div>
        <div className="modal-error-body">
          <p>
            O pagamento <strong>NÃO</strong> foi concluído com sucesso.
          </p>
        <div className="paid-error">
          <button className="button-paid-error" onClick={() => props.closeModal()}>
            Fechar
          </button>
          <button className="button-paid-error" onClick={props.changeModal}>
            Retornar
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
