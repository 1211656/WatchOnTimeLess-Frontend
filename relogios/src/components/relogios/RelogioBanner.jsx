import React, {useEffect,useState}from 'react'
import {RelogioService} from '../../service/RelogioService'
import { MdFavoriteBorder } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import "./styles/RelogioBanner.css";
import { useNavigate } from 'react-router-dom';
import { CiCirclePlus } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

export default function ({listaRel}) {
    const navigate = useNavigate();
    const relogioService = new RelogioService();
    const [listaRelogios, setListaRelogios] = useState(null);
    const url = "https://www.replicasrelojes.online/7467-large_default/rolex-yach-master-ceramico-super-clon-3235.jpg";
    const [showDesignacaoRelogio, setShowDesignacaoRelogio] = useState(-1);
    const [relogio, setRelogio] = useState(null);
    
    


    const handleGoWatchProfile = () => {
        navigate(`/relogio/${showDesignacaoRelogio}`);
    }

    useEffect(() => {
        console.log(listaRel);
        setListaRelogios(listaRel);
       
      }, [listaRel]);

  return (
    <div className='mt-10 flex flex-col justify-center items-center  ' >
        
        <div className='grid  sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2   gap-10  '>
            {
              
                listaRelogios && listaRelogios.map((relogio)=> (
                    <div key={relogio.id} className='  flex justify-center items-center flex flex-col   '>
                
                        <div onMouseOver={()=>{setShowDesignacaoRelogio(relogio.id)}} onMouseLeave={()=>{setShowDesignacaoRelogio(-1)}} className=' border-gray-300 rounded-sm flex flex-col items-center    ' onClick={handleGoWatchProfile}>
                                    
                            <div className='flex flex-col relative  bg-white   '>
                                <button className='z-10  p-2   '>
                                    <img className='zoom ' src={relogio.album[0]} alt={relogio.marca} style={{height: 300, width:300}} />
                                </button>

                                <button className='z-20  flex justify-center ' style={{ transform: 'translateY(-15px)' }} >
                                    <CiCirclePlus className='h-8 w-8 text-gray-600' />
                                </button>
                                
                                
                            </div>
                           
                            <div className='mt-2 flex flex-col  w-full '>
                                <div className='flex  justify-between'>
                                    <div className=' flex text-sm justify-left uppercase font-gilda font-semibold'>{`${relogio.marca} ${relogio.modelo}`.length > 60 ? `${`${relogio.marca} ${relogio.modelo}`.substring(0, 60)}...` : `${relogio.marca} ${relogio.modelo}`}</div>
                                    <button className='text-sm flex justify-end  '>
                                        <CiBookmark className='h-4 w-4'/>
                                    </button>
                                </div>
                                <div className='  text-sm  mt-1 mb-1 font-semibold'>{(relogio.preco).toFixed(2).replace('.', ',')} €</div>
                            </div>
                        </div>
                        <br></br>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
