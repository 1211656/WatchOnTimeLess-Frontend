import React, {useState, useEffect} from 'react'
import HomePage from './HomePage';
import Marcas from './Marcas';
import CondicoesGerais from './CondicoesGerais';
import Entrega from './Entrega';
import Garantia from './Garantia';
import { IoPersonOutline } from "react-icons/io5";
import LoginPage from '../LoginPage';
import { IoMenu } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import "./styles/NavListMenuStyles.css";
import RegisterPage from '../RegisterPage';
import { useNavigate } from 'react-router-dom';
import { TiThMenuOutline } from "react-icons/ti";
import { FcFrame } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import SloganBanner from '../SloganBanner';
import SearchPage from '../SearchPage';

export default function NavListMenu({cor, search, iniciarSessao}) {
  const [showNav, setShowNav] = useState(true);
  const [marcaHovered,setMarcaHovered] = useState(false);
  const [page, setPage] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showInputBox, setShowInputBox] = useState(false);
  const navigate = useNavigate();
  let lastScrollY = window.scrollY;
  const handleGarantia = () => {
    //setPage(2); setShowMenu(false);
    navigate('/garantia');
  }
  const handleCondicoes = () => {
    navigate('/condicoesGerais')
    //setPage(3); setShowMenu(false);
  }
  const handleEntrega = () => {
    navigate('/entrega')
    //setPage(4); setShowMenu(false);
  }

  const handleHomePage = () => {
    navigate('/home');
    //setPage(0); setShowMenu(false);
  }
  
  const handleMarcas = () => {
    navigate('/marcas');
    //setPage(1); setShowMenu(false);
  }
  
  const logoSourceAddress = "https://cdn-icons-png.flaticon.com/512/32/32720.png";
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY <= lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {showNav && (
    <div className=' z-20 fixed top-0 w-full'>
    <div className=' flex flex-col    '>

      
      <div className='     h-28'>
      <div className='    flex  justify-between '>
        {!showMenu &&
        
          <div onClick={()=> {setShowMenu(true)}} className='absolute topLeft flex gap-20 '>
            <HiOutlineMenuAlt4 onClick={()=> {setShowMenu(true)}} className='h-6 w-6 text-white ' style={{ color: cor === 'black' ? 'black' : 'white' }}></HiOutlineMenuAlt4>
          </div>
        }
        {
          showMenu && 
          <div className='flex absolute'>
            <div className=' border border-black absolute ' >
              
              <div className='flex flex-col items-center  '>
                
                <div className=' flex gap-10'>
                  <div className=' items-center   topLeft' onClick={()=> {setShowMenu(false)}}>
                    <FaXmark className='text-brown h-6 w-6 ' style={{ color: cor === 'black' ? 'black' : 'white' }} />
                  </div>
                  
                </div>
                
                <div className='flex flex-col justify-content items-start bg-white  leftPositioningMenu border border-black absolute'>
                  
                <br/>

                
                <button className='px-2 mb-6  mt-1 text-8xl font-gilda text-black'  onClick={()=> {navigate("/")}}>
                  TimeLess
                </button>
                
                <div   className=' flex flex-row  gap-4   '>
                  
                  <div onMouseLeave={() => setMarcaHovered(false)} onMouseOver={() => setMarcaHovered(true)} className=' flex hover:bg-brown-700  hover:rounded-md  items-center   px-2 py-1  mt-1   '>    
                    <button  className=' text-brown-700  subpixel-antialiased  font-gilda font-bold  ' onClick={()=> {navigate("/marcas/rolex")}}>Rolex</button>
                  </div>
                  <div onMouseLeave={() => setMarcaHovered(false)} onMouseOver={() => setMarcaHovered(true)} className=' flex hover:bg-brown-700  hover:rounded-md  items-center   px-2 py-1  mt-1   '>    
                    <button  className=' text-brown-700  subpixel-antialiased  font-gilda font-bold  ' onClick={()=> {navigate("/marcas/omega")}}>Omega</button>
                  </div>
                  <div onMouseLeave={() => setMarcaHovered(false)} onMouseOver={() => setMarcaHovered(true)} className=' flex hover:bg-brown-700  hover:rounded-md  items-center   px-2 py-1  mt-1   '>    
                    <button  className=' text-brown-700  subpixel-antialiased  font-gilda font-bold  ' onClick={()=> {navigate("/marcas/pattekphilipe")}}>Pattek Philipe</button>
                  </div>
                  <br></br>
                    
                </div>
                <hr className='border w-full'/>
                  <div className=' flex   hover:rounded-md h-10 items-center p-1 mt-1 px-2 font-bold'> 
                    <button onClick={handleGarantia} className=' font-semibold subpixel-antialiased font-medium  text-brown-300 font-gilda'>Garantia</button>
                  </div>
                  
                  <div className=' flex   hover:rounded-md h-10 items-center p-1  mt-1 px-2 '> 
                    <button onClick={handleCondicoes} className=' font-semibold subpixel-antialiased font-medium  font-bold text-brown-300 font-gilda'>Condições Gerais</button>
                  </div>
                  
                  <div className=' flex   hover:rounded-md h-10 items-center p-1  mt-1 px-2 mb-2 font-bold'> 
                    <button onClick={handleEntrega} className=' font-semibold subpixel-antialiased font-medium  text-brown-300 font-gilda'>Entrega</button>
                  </div>
                  
                  
              </div>
              </div>
            </div>
          </div>
        }
        

          

          <div className='flex lupaPositioning '>
                      
                      {
                        !showInputBox && search &&
                        <div className='flex gap-2  items-center '>
                          
                          <div className=' border border-gray-500 bg-white p ' style={{width:370, height:30}}>
                            <button className='  items-center animacaoSearchBar ' style={{width:370, height: 30}} onClick={()=> {navigate("/search")}}>
                              <div className='flex justify-end mr-4 uppercase text-sm text-gray-500 ' style={{fontSize:10}}>
                                Pesquisa
                              </div>
                            </button>
                          </div>
                          
                        </div>
                      }
                  </div>

          
            <div  className='flex items-center gap-2 text-green  absolute centerRight '>
              { iniciarSessao &&
                <div>
              <button onClick={()=> {navigate("/loginRegister")}}  className=' items-center uppercase  text-white mr-2  mt-1' style={{ color: cor === 'black' ? 'black' : 'white' }} >
                Iniciar Sessão
              </button>
                </div>
                }
              <button  className=' items-center uppercase text-white mr-2  mt-1' style={{ color: cor === 'black' ? 'black' : 'white' }}>
                Ajuda
              </button>
              <button  className=' items-center uppercase text-white mr-2  mt-1' style={{ color: cor === 'black' ? 'black' : 'white' }}>
                Cesto(0)
              </button>
            </div>
            

          

        </div>
        <SloganBanner cor={cor}></SloganBanner>
        
      </div>

      
      
      
    

    </div>
    </div>
    )}
    </div>


    
  )

}
