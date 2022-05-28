function UserModal(props) {
  return (
    <div>
      {props.usuario.name}
      <button
        onClick={() => {
          props.setUsuario(props.usuario);
        }}
      >
        Pagar
      </button>
    </div>
  );
}
export default UserModal;
