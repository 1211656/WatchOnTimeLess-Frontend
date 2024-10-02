import React, {useState} from 'react'
import LoginPage from './LoginPage'
import { PiTrayArrowDownDuotone } from "react-icons/pi";
import { BsCheckSquareFill } from "react-icons/bs";
import { FaSquareXmark } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import {Usuario} from "../dominio";
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
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [nomeUtilizador, setNomeUtilizador] = useState(''); 
  const usuarioService = new UsuarioService();

  const handleSubmissionRegister = () => {
    
    if(nomeCheck && emailCheck && passwordCheck){
      
      let usuario = new Usuario(nome,nomeUtilizador, password, email);
      usuarioService.inserir(usuario).then((response)=> {
        alert('Usuário inserido com sucesso!')
        navigate("/login")
      }).catch((error) => {
        console.log(error);
        alert('Ocorreu um erro ao inserir o utilizador!')
      })
      console.log(usuarioService.listarTodos().then(()=>{
        console.log('Listagem realizada com sucesso!');
      }).catch((error)=> {
        console.log(error);
      }))

    }else{
      
    }
  }

  const handleNomeInput = (e) => {
    if( e.target.value === ''){
      setNomeCheck(false);
    }else{
      setNomeCheck(true);
      setNome(e.target.value);
    }
  }


  const handleNomeUtilizadorInput = (e) => {
    if( e.target.value === ''){
      setNomeUtilizadorCheck(false);
    }else{
      setNomeUtilizadorCheck(true);
      setNomeUtilizador(e.target.value);
    }
  }

  const handleEmailInput = (e) => {
    if( e.target.value === ''){
      setEmailCheck(false);
    }else{
      if(e.target.value.includes('@')){
        setEmailCheck(true);
        setEmail(e.target.value);
      }else{
        setEmailCheck(false);
      }
    }
  }

  const handlePasswordInput = (e) => {
    if( e.target.value === ''){
      setPasswordCheck(false);
    }else{
      setPasswordCheck(true);
      setPassword(e.target.value);
    }
  }


    
  return (
    <div>
      
      <div className='flex flex-col mt-10 justify-center items-center mb-10 mt-64'>
        <div className='flex items-center justify-center gap-2 font-semibold text-2xl'>
          Faça o registo aqui
          <PiTrayArrowDownDuotone className='h-6 w-6' />
        </div>
        <div className=''>
          <div className='flex justify-center mt-10 gap-2'>
              Nome 
          </div>
          <div className='flex gap-1'>
            <input className='border p-1 items-center rounded-md mt-2 ' name='pesquisa..' placeholder="Nome.." onChange={(e) => handleNomeInput(e)}></input>
            <div className=' flex mt-3 gap-2'>
              { nomeCheck &&
                <BsCheckSquareFill  className='text-green-600 h-6 w-6'/>
              }
              { !nomeCheck &&
                <FaSquareXmark  className='text-red-600 h-7 w-7'/>
              }
            </div>
          </div>
          
        </div>

        <div className=''>
          <div className='flex justify-center mt-2 gap-2'>
              Nome de Utilizador
          </div>
          <div className='flex gap-1'>
            <input className='border p-1 items-center rounded-md mt-2 ' name='pesquisa..' placeholder="Nome.." onChange={(e) => handleNomeUtilizadorInput(e)}></input>
            <div className=' flex mt-3 gap-2'>
              { nomeUtilizadorCheck &&
                <BsCheckSquareFill  className='text-green-600 h-6 w-6'/>
              }
              { !nomeUtilizadorCheck &&
                <FaSquareXmark  className='text-red-600 h-7 w-7'/>
              }
            </div>
          </div>
          
        </div>
        <div>
          <div className='flex justify-center  mt-2'>
              Email
          </div>
          <div className='flex gap-1'>
            <input className='border p-1 items-center rounded-md mt-2' name='pesquisa..' placeholder="Email.." onChange={(e) => handleEmailInput(e)}></input>
            <div className='flex mt-3 gap-2'>
              { emailCheck &&
                <BsCheckSquareFill  className='text-green-600 h-6 w-6'/>
              }
              { !emailCheck &&
                <FaSquareXmark  className='text-red-600 h-7 w-7'/>
              }
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center  mt-2'>
              Password
          </div>
          <div className='flex gap-1'>
            <input className='border p-1 items-center rounded-md mt-2' name='pesquisa..' placeholder="Password.." onChange={(e) => handlePasswordInput(e)}></input>
            <div className='flex mt-3 gap-2'>
            { passwordCheck &&
                <BsCheckSquareFill  className='text-green-600 h-6 w-6'/>
              }
              { !passwordCheck &&
                <FaSquareXmark  className='text-red-600 h-7 w-7'/>
              }
            </div>
          </div>
        </div>

        { nomeCheck && emailCheck && passwordCheck && 
          <div className='flex mt-10 gap-2'>
            <button onClick={handleSubmissionRegister} className=' border p-1 rounded-md bg-gray-200 hover:bg-white hover:border-gray'>
              Submeter
            </button>
            <div className='mt-2'>
              <IoCheckmarkDoneOutline  className='text-green-600 h-5 w-5'/>
            </div>
            
          </div>
        }

        {
          (!nomeCheck || !emailCheck || !passwordCheck ) &&
          <div className='flex mt-10 gap-2'>
            <button onMouseEnter={() => setShowXmark(true)} onMouseLeave={() => setShowXmark(false)}  className=' border p-1 rounded-md bg-gray-200 '>
              Submeter
            </button>
            {
              showXmark &&
              <FaSquareXmark  className='text-red-600 h-7 w-7'/>
            }
          </div>
        }

      </div>
    </div>
  )
}
