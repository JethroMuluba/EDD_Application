import React from 'react'
import ContextGlobalProvider from './src/models/ContextGlobal'
import AuthLayout from './src/components/AuthLayout'
import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <ContextGlobalProvider>
        <AuthLayout>
            <Outlet/>
        </AuthLayout>
    </ContextGlobalProvider>
  )
}

export default Auth