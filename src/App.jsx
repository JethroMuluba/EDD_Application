import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'
import Layout from './components/Layout'




function App() {

  return (
    <Layout>
      <Sidebar/>
      <Outlet/>
    </Layout>
  )
}

export default App
