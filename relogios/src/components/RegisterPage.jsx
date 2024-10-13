import React, { useState } from 'react'
import LoginPage from './LoginPage'
import { PiTrayArrowDownDuotone } from "react-icons/pi";
import { BsCheckSquareFill } from "react-icons/bs";
import { FaSquareXmark } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { Usuario } from "../dominio";
import { UsuarioService } from '../service/UsuarioService';
import { useNavigate } from 'react-router-dom';
import NavListMenu from './menu/NavListMenu';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [nomeCheck, setNomeCheck] = useState(false);
  const [nomeUtilizadorCheck, setNomeUtilizadorCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [submeterCheck, setSubmeterCheck] = useState(false);
  const [showXmark, setShowXmark] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nomeUtilizador, setNomeUtilizador] = useState('');
  const usuarioService = new UsuarioService();

  const handleSubmissionRegister = () => {

    if (nomeCheck && emailCheck && passwordCheck) {

      let usuario = new Usuario(nome, nomeUtilizador, password, email);
      usuarioService.inserir(usuario).then((response) => {
        alert('Usuário inserido com sucesso!')
        navigate("/login")
      }).catch((error) => {
        console.log(error);
        alert('Ocorreu um erro ao inserir o utilizador!')
      })
      console.log(usuarioService.listarTodos().then(() => {
        console.log('Listagem realizada com sucesso!');
      }).catch((error) => {
        console.log(error);
      }))

    } else {

    }
  }

  const handleNomeInput = (e) => {
    if (e.target.value === '') {
      setNomeCheck(false);
    } else {
      setNomeCheck(true);
      setNome(e.target.value);
    }
  }

  const handleNomeUtilizadorInput = (e) => {
    if (e.target.value === '') {
      setNomeUtilizadorCheck(false);
    } else {
      setNomeUtilizadorCheck(true);
      setNomeUtilizador(e.target.value);
    }
  }

  const handleEmailInput = (e) => {
    if (e.target.value === '') {
      setEmailCheck(false);
    } else {
      if (e.target.value.includes('@')) {
        setEmailCheck(true);
        setEmail(e.target.value);
      } else {
        setEmailCheck(false);
      }
    }
  }

  const handlePasswordInput = (e) => {
    if (e.target.value === '') {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
      setPassword(e.target.value);
    }
  }

  return (
    <div>
      <div className='' style={{ alignItems: 'flex-start' }}>
        <div className='flex flex-col mt-10 mb-10'>
          <div className='flex flex-col  justify-center  items-center text-2xl gap-3 px-2 mb-6  mt-1 text-8xl font-gilda text-black'>
            <button onClick={() => { navigate("/loginRegister") }}> TimeLess </button>
          </div>

          <div>
            <div className='flex flex-col justify-center items-center gap-4 mt-10' style={{textTransform: 'uppercase'}} >Faça o seu registo aqui </div>
          </div>

          <div className=' flex  justify-center  items-center gap-4 mt-10'>
            <div className='flex flex-col gap-8'>
              <div className='font-semibold'>
                Nome
              </div>
              <div className='font-semibold'>
                Username
              </div>
              <div className='font-semibold'>
                Email
              </div>
              <div className='font-semibold'>
                Password
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <input className='border p-1 items-center rounded-md mt-2 ml-2' style={{borderBottom: '1px solid lightgray'}} name='pesquisa..' placeholder="Nome.." onChange={(e) => handleNomeInput(e)}></input> 
              <input className='border p-1 items-center rounded-md mt-2 ml-2' style={{borderBottom: '1px solid lightgray'}} name='pesquisa..' placeholder="Username.." onChange={(e) => handleNomeUtilizadorInput(e)}></input>
              <input className='border p-1 items-center rounded-md mt-2 ml-2' style={{borderBottom: '1px solid lightgray'}} name='email' placeholder="E-mail.." onChange={(e) => handleEmailInput(e)} />
              <input className='border p-1 items-center rounded-md mt-2 ml-2' style={{borderBottom: '1px solid lightgray'}} name='password' placeholder="Password.." onChange={(e) => handlePasswordInput(e)} />
            </div>

            <div className='flex flex-col gap-8'>
              {nomeCheck &&
                <BsCheckSquareFill className='text-green-600 h-6 w-6' />
              }
              {!nomeCheck &&
                <FaSquareXmark className='text-red-600 h-7 w-7' />
              }
            
              {nomeUtilizadorCheck &&
                <BsCheckSquareFill className='text-green-600 h-6 w-6' />
              }
              {!nomeUtilizadorCheck &&
                <FaSquareXmark className='text-red-600 h-7 w-7' />
              }
            
              {emailCheck ? (
                <BsCheckSquareFill className='text-green-600 h-6 w-6' />
              ) : (
                <FaSquareXmark className='text-red-600 h-7 w-7' />
              )}
            
              {passwordCheck ? (
                <BsCheckSquareFill className='text-green-600 h-6 w-6' />
              ) : (
                <FaSquareXmark className='text-red-600 h-7 w-7' />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}