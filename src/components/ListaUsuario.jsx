import React, { useState, useEffect } from 'react';
import NewModal from './NewModal';
import '../css/listaUsuarios.css';
import User from './User';

function Lista() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState({});

  useEffect(() => {
    fetch('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then((json) => json.json())
      .then((res) => {
        setUsuarios(res);
      });
  }, []);

  return (
    <>
      {usuarios.map((usuarios) => {
        return (
          <div className="container-dados">
            <div className="dados">
              <img
                className="img"
                key={usuarios.img}
                src={usuarios.img}
                alt=""
              />
              <div className="container_usuario_id">
                <div className="nome_usuario">
                  <div className="name">Nome do usuário: {usuarios.name}</div>
                  <div className="id_user">
                    <div className="id">ID: {usuarios.id}</div>
                    <div className="usuario">Username: {usuarios.username}</div>
                  </div>
                </div>
              </div>
              <User usuarios={usuarios} setUsuarios={setUsuarioSelecionado} />
              {usuarioSelecionado.name && (
                <NewModal
                  usuarioSelecionado={usuarioSelecionado}
                  setUsuarios={setUsuarioSelecionado}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Lista;
