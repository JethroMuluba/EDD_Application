import { Outlet } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import ContextGlobalProvider from './models/ContextGlobal'




function App() {

  return (
    <ContextGlobalProvider>
      
        <Layout>
          <Outlet/>
        </Layout>
    </ContextGlobalProvider>

  )
}

export default App
