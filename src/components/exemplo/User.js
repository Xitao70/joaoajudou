 function User(props) {
  return (
   <>
      <div className="botao">
      {/* {props.usuarios.name} */}
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
