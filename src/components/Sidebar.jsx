import React from 'react'
import data from '../data/data.json';


function Sidebar() {
  return (
    <div className='w-1/5 flex flex-col gap-[220px] py-[24px] bg-cyan-950 '>
      <nav className='flex flex-col  gap-[70px] '>

        <img className='w-44 h-auto  px-[27px]' src={data.logo[0].darkMode} alt="Logo EDD App" />

        <ul className='flex flex-col gap-[px]'>
          <li className='flex items-center  gap-[20px] py-[10px] px-[27px]  hover:bg-cyan-900 hover:text-[#F4CA8D] '>
            <span>
              <img src={data.icones[0].icone} alt="" />
            </span>
            <p className='text-base font-medium '>
              {data.icones[0].linkName}
            </p>
          </li>

          <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
            <span>
              <img src={data.icones[1].icone} alt="" />
            </span>
            <p className='text-base font-medium '>
              {data.icones[1].linkName}
            </p>
          </li>

          <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
            <span>
              <img src={data.icones[2].icone} alt="" />
            </span>
            <p className='text-base font-medium '>
              {data.icones[2].linkName}
            </p>
          </li>

          <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
            <span>
              <img src={data.icones[3].icone} alt="" />
            </span>
            <p className='text-base font-medium '>
              {data.icones[3].linkName}
            </p>
          </li>

          <li className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D] '>
            <span>
              <img src={data.icones[4].icone} alt="" />
            </span>
            <p className='text-base font-medium '>
              {data.icones[4].linkName}
            </p>
          </li>
        </ul>
      </nav>

      <div>
        <span className='flex items-center  gap-[20px]  py-[10px] px-[27px] hover:bg-cyan-900 hover:text-[#F4CA8D]'>
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