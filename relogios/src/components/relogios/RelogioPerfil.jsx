import React, {useEffect,useState } from 'react'
import NavListMenu from '../menu/NavListMenu'
import RelogioBanner from './RelogioBanner'
import { useNavigate , useParams} from 'react-router-dom';
import { UsuarioService } from '../../service/UsuarioService';
import { RelogioService } from '../../service/RelogioService';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import DescricaoDetalhes from './DescricaoDetalhes';
import { BiFontSize } from 'react-icons/bi';
import InfoAboutBrand from '../InfoAboutBrand'
export default function RelogioPerfil() {

  const navigate = useNavigate();
  const relogioService = new RelogioService();
  const [relogio, setRelogio] = useState();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const { id } = useParams();
  const backgroundImage = "url('https://images.unsplash.com/photo-1518837695005-2083093ee35b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D')";
  const handlePhotoLeft = () => {
    setCurrentPhotoIndex((currentPhotoIndex - 1 + album.length) % album.length);
  }
  
  const handlePhotoRight = () => {
    setCurrentPhotoIndex((currentPhotoIndex + 1) % album.length);
  }

  const handleChangeWatchDisplay = (index) => {
    setCurrentPhotoIndex(index +1);
  }

  useEffect(() => {
    relogioService.buscarPorId(id).then((response)=>{
      setRelogio(response.data);

    })
  }, []);

  var album = []
  var modelo = "";
  var marca = "";
  var preco = -1;
  var stock = -1;
  var genero = "";
  var descricaoPrincipal = []

  if(relogio){
    album = relogio.album;
    modelo = relogio.modelo;
    marca = relogio.marca;
    preco = relogio.preco;
    stock = relogio.stock;
    descricaoPrincipal = relogio.descricaoPrincipal
    genero = relogio.genero;
}

  
  return (
    <div className="bg-fixed overflow-auto" style={{ backgroundImage: backgroundImage }}>
    { relogio &&
    <div className='mt-40'>
        <NavListMenu cor={"black"} search={true} iniciarSessao={true}></NavListMenu>
         <div className='flex flex-col justify-content justify-center items-center  '>
          <div className='mt-10 text-gray-400 font-semibold '>
            
            <div className='flex mt-3 '>
              <div className='flex flex-col'>
                <div className='flex justify-evenly items-center'>
                  <img className='' src={album[currentPhotoIndex]} style={{height:450,width:450}}></img>
                  <div className='flex flex-col  mt-6 mt-64 items-center mb-10'>
                  
                  
                  <div 
                    onWheel={(event) => {
                      if (event.deltaY > 0) {
                        // Scroll down, increase index
                        setCurrentPhotoIndex(prevIndex => Math.min(prevIndex + 1, album.length - 1));
                      } else {
                        // Scroll up, decrease index
                        setCurrentPhotoIndex(prevIndex => Math.max(prevIndex - 1, 0));
                      }
                    }}
                  >
                  {
                    album.map((item, index) => (
                      <div 
                        key={index} 
                        className={`border text-black ${index === currentPhotoIndex ? 'border-black' : ''}`}  
                        onClick={()=>{setCurrentPhotoIndex(index)}}
                      >
                        <img src={item} style={{height:40,width:40}} />
                      </div>
                    ))
                  }
                  </div>

                  
                </div>
                  <div className='flex flex-col gap-4 w-1/3  '>
                    <div className='border bg-white'>
                    <div className=' p-6'>  
                    <div className=' text-black uppercase' style={{fontSize:10}}>
                      {modelo}
                    </div>
                    <div className='text-black' style={{fontSize:11}}>
                      {(preco).toFixed(2).replace('.', ',')} €
                    </div>
                    <div className=' mt-10 text-black' style={{fontSize:12}}>
                            La imitación Rolex Deepsea es el reloj para buceo perfecto, diseñado para <br/>
                             resistir altas profundidades. Con una caja robusta de 44 mm y movimiento <br/> 
                             automático suizo ETA 2824, combina innovación técnica y estilo refinado <br/>
                              convirtiendose en la imitación ideal para buceadores y entusiastas del buceo.
                    </div >

                    </div>
                    <div className='flex flex-col'> 
                      
                      <div className=' gap-2    rounded-md  '>
                        

                         
                          
                       
                        <div className="flex ">
                        

                        <button className=' flex items-center w-full justify-center border  p-2 uppercase bg-black text-white  mt-10 ' style={{fontSize: 12}} > <div className="hover:opacity-90">Adicionar</div> </button>
                        
                        
                      </div>
                      </div>
                     
                      
                    </div>
                    </div>

                  </div>
                </div>
                <div className='flex  gap-2 items-center justify-center mt-5'>
                        <div className='mt-2'>
                          Partilhar
                        </div>
                        
                        <div className=' text-black mt-2 '>
                          <button className='border rounded-3xl p-2 bg-white hover:text-green-700'>
                            <FaXTwitter className='h-5 w-5'/>
                          </button>
                        </div>

                        <div className='text-black mt-2'>
                          <button className='border rounded-3xl p-2 bg-white hover:text-green-700'>
                            <FaInstagram className='h-5 w-5'/>
                          </button>
                        </div>
                      </div>
                
              </div>
            </div>
          </div>
        </div>  
              

            
            <InfoAboutBrand></InfoAboutBrand>


        
    </div>
    }
    </div>
  )
}
