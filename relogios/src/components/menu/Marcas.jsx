import React, { useState, useEffect } from 'react'
import NavListMenu from './NavListMenu'
import { useNavigate, useParams } from 'react-router-dom';
import { RelogioService } from '../../service/RelogioService';
import RelogioBanner from '../relogios/RelogioBanner';
import InfoAboutBrand from '../InfoAboutBrand';

export default function Marcas() {
  const { marca } = useParams();
  const relogioService = new RelogioService();
  const [listaRelogiosPorMarca, setListaRelogiosPorMarca] = useState();
  const backgroundImage = "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')";
  useEffect(() => {
    relogioService.listarTodos().then((response) => {
      let listaRel = [];
      console.log(response.data[0].brand.name);
      for (let i = 0; i < response.data.length; i++) {
        
        if (response.data[i].brand.name.toLowerCase() === marca) {
          listaRel.push(response.data[i]);
          
        }
      }
      setListaRelogiosPorMarca(listaRel);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    //console.log(listaRelogiosPorMarca);
  }, [listaRelogiosPorMarca]);
  
  return (
    <div>
      <div className=' bg-fixed overflow-auto ' style={{ backgroundImage: backgroundImage }}>
        <NavListMenu cor={"black"} search={true} iniciarSessao={true}></NavListMenu>
        <div className='mt-64'>
          {listaRelogiosPorMarca && <RelogioBanner listaRel={listaRelogiosPorMarca} />}
        </div>


      </div>
      <InfoAboutBrand />
    </div>
  )
}
