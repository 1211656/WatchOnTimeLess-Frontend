import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavListMenu from '../components/menu/NavListMenu';
import InfoAboutBrand from './InfoAboutBrand';
export default function LoginRegisterPage() {
    const backgroundImage = "url('https://usa.watchpro.com/cloud/2023/09/27/Rolex-Bob-4.jpg')"; 
    const navigate = useNavigate();
  return (
    <div>
        <div >
        <NavListMenu cor={"black"} search={true} ></NavListMenu>

        <div className='flex'>
            <div className='w-1/2 flex  justify-center  ' >
                <div className=' flex flex-col mt-72  w-96 items-center    '>
                    <h1 className='text-xl  font-gilda uppercase '>Desfrute da melhor experiência</h1>
                    <div className='mt-10  mb-64'>
                        <div className='text-sm'>
                            Inicie sessão para usufruir de uma experiência personalizada e aceder a <br/> todos os nossos serviços.
                        </div>

                        <button onClick={()=> {navigate("/login")}} className=' border border-black w-full bg-black text-white p-1.5 font-gilda mt-8 hover:opacity-90 uppercase text-sm'>
                            Iniciar Sessão
                        </button>

                        <button onClick={()=> {navigate("/register")}} className=' border w-full border-black text-black p-1.5 font-gilda mt-8 hover:opacity-70 uppercase text-sm'>
                            Registe-se
                        </button>

                    </div>
                </div>
            </div>
            <div className='w-1/2 border border-black ' style={{ backgroundImage: backgroundImage, backgroundSize: 'cover' }}>

            </div>
        </div>
        </div>

        
        <div className=''>
            
            <InfoAboutBrand ></InfoAboutBrand>
        </div>
    </div>
  )
}
