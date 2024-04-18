import React from 'react'

function Layout({ children }) {
  return (
    <div className='flex flex-row h-screen'>
        {children}
    </div>
  )
}

export default Layout;