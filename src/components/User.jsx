function User(props) {
  return (
    <>
      <div className="botao">
        <button
          onClick={() => {
            props.setUsuarios(props.usuarios);
          }}
        >
          Pagar
        </button>
      </div>
    </>
  );
}
export default User;
