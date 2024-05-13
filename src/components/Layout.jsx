import React from 'react'
import ContextGlobalProvider from '../models/ContextGlobal';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (

    
      <div className=' flex flex-row macbookAir:'>
        <Sidebar/>
        {children}
      </div>
    

  )
}


export default Layout;