import React, {useState, useEffect} from 'react'
import RegisterPage from './RegisterPage';
import { GoArrowLeft } from "react-icons/go";
import { BsFillPersonVcardFill } from "react-icons/bs";
import NavListMenu from './menu/NavListMenu';
import { useNavigate } from 'react-router-dom';
import { admin } from '../dominio';
import { UsuarioService } from '../service/UsuarioService';
import {GoogleLogin} from 'react-google-login';

const clientId = "206290008863-u3hac9sdgb777g5gmd1u4bvnv6j2ajcd.apps.googleusercontent.com";

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

   const onSuccess = (res) => {
    console.log('Success!' + res.profileObj.email);
   }

   const onFailure = (res) => {
    console.log('Failure!', res.error);
   }

   
  return (
    <div>
        <div className='' style={{alignItems: 'flex-start'}}>
                <div className='flex flex-col mt-10 mb-10'>
                    <div className='flex flex-col  justify-center  items-center text-2xl gap-3 px-2 mb-6  mt-1 text-8xl font-gilda text-black'>
                        <button onClick={()=> {navigate("/loginRegister")}}> TimeLess </button>
                    </div>

                    <div>
                        <div className='flex flex-col justify-center items-center gap-4 mt-10' style={{textTransform: 'uppercase'}}>Inicia a sessão da tua conta </div>
                    </div>

                <div className=' flex  justify-center  items-center gap-6 mt-10'>
                    <div className='flex flex-col gap-5'>
                        <div className='mt-0.5 mr-6 font-semibold'>
                            Username
                        </div>
                        <div className='mt-2 font-semibold'>
                            Password
                        </div>   
                    </div>
                    
                    <div className='flex flex-col gap-4'>
                        <input className=' border p-1 items-center rounded-md' style={{borderBottom: '1px solid lightgray'}} name='pesquisa..' placeholder="Username.." onChange={handleLoginInput}></input>
                        <input className=' border p-1 items-center rounded-md' style={{borderBottom: '1px solid lightgray'}} name='pesquisa..' placeholder="Password.." onChange={handlePasswordInput}></input>
                    </div>
                    <div className='flex-col mb-3.5'>
                        <button onClick={handleLoginSubmission} className='border rounded-xl p-1 mt-3 hover:bg-gray-200'>SUBMETER</button>
                    </div>

                </div>
                </div>

                <div className='flex justify-center' id='signInButton'>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login com Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                    
                </div>
        </div>
    </div>
    
  )
}
