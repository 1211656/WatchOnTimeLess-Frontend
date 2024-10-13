import React,{useEffect,useState} from 'react'
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./styles/PhotoBanner.css";

export default function PhotoBanner() {

  const images = [
    {uri: 'https://www.replicasrelojes.online/modules/ps_imageslider/images/37a4c99c5bcd312f2c37211ea799f38fa02b8d8b_Promocion%202024%20replica%20Audemars%20Piguet%20de%20se%C3%B1ora.jpg'},
    {uri: 'https://www.replicasrelojes.online/modules/ps_imageslider/images/99c44b88065834b916f94ada86227463f1e95bbe_Slider%20imitacion%20reloj%20Rolex%20Batman%20PS%208.jpg'},
    {uri: 'https://www.replicasrelojes.online/modules/ps_imageslider/images/69c165779ec6ff315909d0417700404c20a57228_Envio%20gratis%20replica%20de%20reloj%202024.jpg'},
  ]

  const [currentImage, setCurrentImage] = useState(0)
  const [showArrows, setShowArrows] = useState(false)

  const goLeft = () => {
    if (currentImage === 0) setCurrentImage(images.length - 1)
    else{
      setCurrentImage(currentImage -1)
    }
  }

  const goRight = () => {
    if (currentImage === images.length - 1) setCurrentImage(0)
    else{
      setCurrentImage(currentImage +1)
    }
  }

  return (
    
      <div onMouseEnter={()=> {setShowArrows(true)}} onMouseLeave={()=> {setShowArrows(false)}} className=' flex items-center  justify-center mt-10   '>
        
        <img 
          src={ "https://remove-background.com/assets/bg-13-BqHyNDmi.webp"}
          className='flex'
          >
        </img>

    </div>
  )
}
