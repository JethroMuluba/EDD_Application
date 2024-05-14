import Hamburger from 'hamburger-react'
import { useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import data from '../data/data.json';


function MenuBurger() {
const [isOpen, setOpen] = useState(false);
const ref = useRef(null);

const navigate = useNavigate();
const handleClick = (path) => {
    navigate(path);
}

return(
<div className='absolute lg:hidden macbookAir:hidden 2xl:hidden  top-2'>
    <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20} color="#222834"  />
    {isOpen && (
    <nav className="flex flex-col gap-2 sticky  text-xl bg-cyan-950 py-2 rounded-lg border">
        <Link to={'/dashboard'}>
            <img className='w-[150px] h-auto  px-[27px]' src={data.logo[0].darkMode} alt="Logo EDD App" />
        </Link>

        <ul className='flex flex-col gap-[px]'>
        <Link to={'/dashboard'} className='text-white'>
            <li className='flex items-center  gap-[20px] py-[10px] px-[27px]  hover:bg-cyan-900 hover:text-[#F4CA8D] '>
                <span>
                    <img src={data.icones[0].icone} alt="" />
                </span>
                <p className='text-base font-medium '>
                    {data.icones[0].linkName}
                </p>
            </li>
        </Link>

        <Link to={'/depenses'} className='text-white'>
            <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
                <span>
                    <img src={data.icones[1].icone} alt="" />
                </span>
                <p className='text-base font-medium '>
                    {data.icones[1].linkName}
                </p>
            </li>
        </Link>

        <Link to={'/Statistiques'} className='text-white'>
            <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
                <span>
                    <img src={data.icones[2].icone} alt="" />
                </span>
                <p className='text-base font-medium '>
                    {data.icones[2].linkName}
                </p>
            </li>
        </Link>

        <Link to={'/Notifications'} className='text-white'>
            <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
                <span>
                    <img src={data.icones[3].icone} alt="" />
                </span>
                <p className='text-base font-medium '>
                    {data.icones[3].linkName}
                </p>
            </li>
        </Link>

        <Link to={'/Paramètres'} className='text-white'>
            <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
                <span>
                    <img src={data.icones[4].icone} alt="" />
                </span>
                <p className='text-base font-medium '>
                    {data.icones[4].linkName}
                </p>
            </li>
        </Link>

        </ul>

        <span className='flex items-center  gap-[20px]  py-[10px] px-[27px] cursor-pointer hover:bg-cyan-900 hover:text-[#F4CA8D]' onClick={() => handleClick('/')}>
            <span >
                <img src={data.icones[5].icone} alt="" />
            </span>
            <p className='text-base font-medium '>
                {data.icones[5].linkName}
            </p>
        </span>
    </nav>
    )}
</div>

)
}
export default MenuBurger;