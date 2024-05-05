import React from 'react'
import data from '../data/data.json';
import { Link, useNavigate } from 'react-router-dom';


function Sidebar() {
  const navigate = useNavigate();
    const handleClick = (path) => {
      navigate(path);
    }
  return (
    <div className='w-1/5 flex flex-col gap-[260px] py-[24px] bg-cyan-950 '>
      <nav className='flex flex-col  gap-[30px] '>

        <Link to={'/dashboard'}>
          <img className='w-44 h-auto  px-[27px]' src={data.logo[0].darkMode} alt="Logo EDD App" />
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
      </nav>

      <div className='flex flex-col gap-[10px]'>
        <span className='flex items-center  gap-[20px] border-b border-gray-600  py-[10px] px-[27px] cursor-pointer hover:bg-cyan-900 hover:text-[#F4CA8D]' onClick={() => handleClick('/')}>
            <span >
              <img src={data.icones[5].icone} alt="" />
            </span>
            <p className='text-base font-medium '>
              {data.icones[5].linkName}
            </p>
        </span>

        <p className='text-[#B2B3B5] text-sm px-[27px]'>
          {data.copyRight}
        </p>
      </div>
      
    </div>
  )
}

export default Sidebar;