import React from 'react'

function Layout({ children }) {
  return (
    <div className='flex flex-row '>
        {children}
    </div>
  )
}

export default Layout;