function Modal(props) {
  return (
    <>
      <div
        style={{
          position: 'relative',
          top: 0,
          background: '#ccc',
          color: 'red',
          margin: '0 auto',
        }}
      >
        Pgamento para {props.usuarioSelecionado.name}     
        <button
          onClick={() => {
            props.setUsuario({});
          }}
        >
          X
        </button>
      </div>
    </>
  );
}
export default Modal;
