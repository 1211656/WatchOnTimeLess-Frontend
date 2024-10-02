import React, {useState, useEffect, useRef} from 'react'
import NavListMenu from './menu/NavListMenu'
import "./styles/SearchPage.css";
import InfoAboutBrand from './InfoAboutBrand';
import { RelogioService } from '../service/RelogioService';
import RelogioBanner from './relogios/RelogioBanner';
export default function () {

  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();
  const relogioService = new RelogioService();
  const [listaRelogios, setListaRelogios] = useState([]);
  
  useEffect(() => {
    relogioService.listarTodos().then((response) => {
      setListaRelogios(response.data);
    });
  }, []);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    
    <div>
        <NavListMenu cor={"black"} iniciarSessao={true}></NavListMenu>
        <div className='mt-64 flex flex-col justify-center justify-content items-center'>
            <h1>O que procura?</h1>
            <div className={`mt-20 h-10 text-2xl flex justify-center items-center`}>
              <div className='input-wrapper' style={{ '--cursor-pos': `${inputValue.length}ch` }}>
                <input className='custom-cursor w-96 ' ref={inputRef} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
              </div>
            </div>
        </div>

        <div className='ml-5 mt-20 uppercase text-sm'>
          Poderás ter interesse em
        </div>
        <hr className='mt-5'/>
        <RelogioBanner listaRel={listaRelogios}></RelogioBanner>

        <hr className='mt-20'/>
        <InfoAboutBrand></InfoAboutBrand>
    </div>
  )
}
