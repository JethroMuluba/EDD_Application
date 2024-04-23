import React, { useEffect, useRef, useState } from 'react'
import data from '../data/data.json';
import { Link } from 'react-router-dom';

const ToggleAddIncome = ({toggleMenu}) => {
    const [showForm, setShowForm] = useState(false);

    const formRef = useRef(null);

    const toggleMenu = () => {
        setShowForm(!showForm);
    };

    useEffect(() => {
        const handleClickOutside3 = (event) => {
            if(formRef.current && !formRef.current.containes(event.target)) {
                setShowForm(false);
            };
        };

    document.addEventListener("mousedown", handleClickOutside3);
    return () => { 
                    document.removeEventListener("mousedown", handleClickOutside3);
                };

    }, []);

  return (
    <div  className='flex justify-between gap-[23px] items-center'>
            <div ref={formRef} className='relative flex flex-col items-center gap-[10px]  m-auto active:shadow-md active:rounded-full'>
                
                <img src={data.icones[6].add} alt="Add Icone" onClick={toggleMenu} className='m-auto active:shadow-md active:rounded-full' />

            {showForm && (
                <ul className='absolute top-full right-0 transform translate-y-[17px] flex flex-col gap-[10px] bg-cyan-950 rounded-[7px] shadow-xl shadow-gray-200 transition-shadow duration-150 ease-in-out pl-[20px] pr-[50px] py-[10px] text-[12px] text-[#222834] '>
                    {/* px-[10px] py-[10px] */}
                    <li>
                        <Link to={'/Paramètres'} className='flex items-center gap-2 '>
                            <img src={data.icones[1].icone} alt=""  /> <p className='text-white hover:text-[#F4CA8D]'>Revenu</p>
                        </Link>
                    </li>

                    <li>
                        <Link to={'/Login'} className='flex items-center gap-2 '>
                            <img src={data.icones[1].icone} alt=""/>  <p className='text-white hover:text-[#F4CA8D]'>Dépenses</p>
                        </Link>
                    </li>

                </ul>
            )}

        </div>

    </div>
  )
}

export default ToggleAddIncome;