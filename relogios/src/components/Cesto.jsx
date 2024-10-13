import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NavListMenu from '../components/menu/NavListMenu';
import InfoAboutBrand from './InfoAboutBrand';

export default function Cesto() {
    const navigate = useNavigate();
    const [showNav, setShowNav] = useState(true);
    const [showMenu, setShowMenu] = useState(false);
    const [showInputBox, setShowInputBox] = useState(false);

    return (
        <div>
            {showNav && <NavListMenu cor={"black"} search={true} />}

            <div className='flex'>
                <div className='w-1/2 flex justify-center'>
                    <div className='flex flex-col mt-72 w-96 items-center'>
                        <h1 className='text-xl font-gilda uppercase'>Desfrute da melhor experiência</h1>
                        <div className='mt-10 mb-64'>
                            <div className='text-sm'>
                                Inicie sessão para usufruir de uma experiência personalizada e aceder a todos os nossos serviços
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <InfoAboutBrand></InfoAboutBrand>
            </div>
        </div>
    );
}