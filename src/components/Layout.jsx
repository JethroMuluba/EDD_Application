import React from 'react'
import ContextGlobalProvider from '../models/ContextGlobal';

function Layout({ children }) {
  return (

    <ContextGlobalProvider>    
      <div className='flex flex-row '>
        {children}
      </div>
    </ContextGlobalProvider>

  )
}


export default Layout;