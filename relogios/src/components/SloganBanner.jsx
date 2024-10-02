import React from 'react'
import { useNavigate } from 'react-router-dom';
import Marcas from './menu/Marcas';
export default function SloganBanner({cor}) {
   const  navigate = useNavigate();

  return (
    <div className=' mt-10 flex-col  ml-32'>
        <button className='text-8xl font-gilda text-white' onClick={()=> {navigate("/")}} style={{ color: cor === 'black' ? 'black' : 'white' }} >
            TimeLess
        </button>

        <div className='flex text-white text-sm ml-3 mt-5 gap-5' style={{ color: cor === 'black' ? 'black' : 'white' }}>
            <button onClick={()=>{navigate("/marcas/rolex")}}>
                Rolex
            </button>
            <button onClick={()=>{navigate("/marcas/omega")}}>
                Omega
            </button>
            <button onClick={()=>{navigate("/marcas/pattekphilipe")}}>
                Pattek Philipe
            </button>
            
        </div>
        <div>
            
        </div>
    </div>
  )
}
