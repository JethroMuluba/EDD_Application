import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/others/Sidebar'
import Layout from './components/others/Layout'




function App() {

  return (
    <Layout>
      <Sidebar/>
      <Outlet/>
    </Layout>
  )
}

export default App
