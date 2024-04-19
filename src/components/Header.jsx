import React from 'react';
import HeaderActions from './HeaderActions';

function Header() {
  return (
    <header className='flex justify-between items-center shadow-md py-[17px] px-[24px]'>

        <h1 className='text-[26px] text-[#222834] '>
            Dashboard
        </h1>

        <HeaderActions />

    </header>
  )
}

export default Header;