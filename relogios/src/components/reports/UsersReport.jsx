import React, {useEffect, useState} from 'react'
import {UsuarioService} from '../../service/UsuarioService';
import { useNavigate } from 'react-router-dom';


export default function 
() {
    const navigate = useNavigate();
    const [listaUsuarios, setListaUsuarios] = useState(null);

    const usuarioService = new UsuarioService();

    useEffect(() => {
      usuarioService.listarTodos().then((response) => {
        setListaUsuarios(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }, []);

  return (
          <div className=''>
            <div className=''>
              <div className='absolute'>
                <button className='border rounded-3xl p-2 hover:bg-gray-300' onClick={() => {navigate("/home")}}> Home ➡️ 🏠 </button>
              </div>
              <div className='flex flex-col justify-content items-center mt-10'>
                <div className='mt-6'>
                  Lista de Usuarios:
                </div>
                <br></br>
                <br></br>
                {listaUsuarios && listaUsuarios.map((usuario) => (
                  <div key={usuario.id} className='flex gap-2'>
                    <div>
                      Id: {usuario.id} 
                    </div> |
                    <div>
                      Nome: {usuario.nome}
                    </div> |
                    <div>
                      Login: {usuario.login}
                    </div> |
                    <div>
                      Password: {usuario.password}
                    </div> |
                    
                  </div>
                  
                ))}
              </div>
            </div>
          <hr></hr>
        </div>
    
  )
}
