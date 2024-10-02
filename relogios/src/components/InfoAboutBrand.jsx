import React from 'react'
import { FaTelegram } from "react-icons/fa";

export default function InfoAboutBrand() {
  return (
    <div className='flex flex-col justify-content justify-center items-center mt-20 mb-20 text-md'>
        <div className='text-md uppercase'>
            Informações
        </div>

        <div className='flex  mt-10 gap-10 text-sm'>
            <button className='hover:underline'>
               Métodos de Pagamento
            </button>
            <button className='hover:underline'>
                Relógios
            </button>
            <button className='hover:underline'>
                Envio
            </button>
            <button className='hover:underline'>
                Datas de Entrega
            </button>
        </div>

        <div className='mt-10 flex gap-3 items-center '>
            Mantenha-se em Contacto
            <button>
                <FaTelegram className='h-5 w-5 text-blue-900'></FaTelegram>
            </button>
        </div>
    </div>
  )
}
