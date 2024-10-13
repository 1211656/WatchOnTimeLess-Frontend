import React,{useEffect, useState} from 'react'
import PhotoBanner from '../PhotoBanner'
import { UsuarioService } from '../../service/UsuarioService';
import NavListMenu from './NavListMenu';
import RelogioBanner from '../relogios/RelogioBanner';
import InfoAboutBrand from '../InfoAboutBrand';
import SloganBanner from '../SloganBanner';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function HomePage() {
  const [showNav, setShowNav] = useState(true);
  const usuarioService = new UsuarioService();

  const images = [
    "https://i.ytimg.com/vi/1faeUhDyIUw/maxresdefault.jpg",
    "https://swisswatches-magazine.com/wp-content/uploads/2021/08/Rolex-Cosmograph-Daytona-M116500ln-0001-White-Dial-Steel.jpg",
    "https://hodinkee.imgix.net/uploads/images/1598887750230-q4wc963c7p-f10afdee181338ab1f31d62de414bd38/Hero_Submariner.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12",

  ]

  const listarTodosButton = () => {
    usuarioService.listarTodos().then((response)=> {
      console.log(response.data);
    }
  ).catch((error) => {
    console.log(error);
    })
  }

  return (
    <div className='  overflow-auto'>
      
          <NavListMenu search={true} iniciarSessao={true} className=""></NavListMenu>
      
      <ParallaxProvider>
      <div className='overflow-auto'>
        {images.map((image, index) => (
          <Parallax key={index} y={[-20, 20]} tagOuter="figure">
            <div className='z-10 flex flex-col justify-center items-center bg-gray-200 h-screen w-screen' 
                 style={{backgroundImage: `url(${image})`, 
                         backgroundSize: 'cover',  
                         backgroundPosition: 'center'}}>
              <br></br>
              <br></br>
              {/* Add your content here... */}
            </div>
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
        
        <InfoAboutBrand></InfoAboutBrand>
      </div>
      
  )
}
