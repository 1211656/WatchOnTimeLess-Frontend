import React, {useState, useEffect} from 'react'
import RegisterPage from './RegisterPage';
import { GoArrowLeft } from "react-icons/go";
import { BsFillPersonVcardFill } from "react-icons/bs";
import NavListMenu from './menu/NavListMenu';
import { useNavigate } from 'react-router-dom';
import { admin } from '../dominio';
import { UsuarioService } from '../service/UsuarioService';

export default function LoginPage(page2) {
   const navigate = useNavigate();
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   const usuarioService = new UsuarioService();
    

   const handleLoginSubmission = () => {
    usuarioService.listarTodos().then((response) => {
        let listaUsuarios = response.data;
        let flag = false;
        for(let i =0; i< listaUsuarios.length; i++){
            if(login === listaUsuarios[i].login && password === listaUsuarios[i].password){
                alert('Login successfully!')
                navigate("/reportUtilizadores")
                flag = true;
                break; 
            } 
        }
        if(!flag){
            alert('Login ou password incorretos!');
        }
    })
    
   }
   const handleLoginInput = (e) => {
       setLogin(e.target.value);
   }
   const handlePasswordInput = (e) => {
       setPassword(e.target.value);
   }
   

   
   

  return (
    <div>
        
        <div className='mt-64 mb-32'>
                <div className='flex flex-col mt-10 mb-10'>
                    <div className='flex flex-col  justify-center  items-center  font-semibold text-2xl gap-3'>
                        <BsFillPersonVcardFill className='text-gray-600 mt-1 h-32 w-32' />
                    </div>
                <div className=' flex  justify-center  items-center  gap-6 mt-10'>
                    <div className='flex flex-col gap-4 '>
                        <div className='mt-0.5 mr-6 font-semibold'>
                            Username
                        </div>
                        <div className='mt-2 font-semibold'>
                            Password
                        </div>   
                    </div>
                    
                    <div className='flex flex-col gap-4'>
                        <input className=' border p-1 items-center rounded-md ' name='pesquisa..' placeholder="Username.." onChange={handleLoginInput}></input>
                        <input className=' border p-1 items-center rounded-md ' name='pesquisa..' placeholder="Password.." onChange={handlePasswordInput}></input>
                    </div>
                    <div className='flex-col mb-3.5'>
                        <button onClick={handleLoginSubmission} className='border rounded-xl p-1 mt-3 hover:bg-gray-200'>SUBMETER</button>
                    </div>

                </div>
                    <div className='flex justify-center items-center mt-4'>
                            <button onClick={() => {navigate("/register")}} className='border rounded-xl p-1.5 mt-3 hover:bg-gray-200'>Registar</button>
                    </div>
                </div>
            
            
        </div>
    </div>
    


  )
}
