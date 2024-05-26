// import { Sidebar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar1 from './SideBar1'



const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <SideBar1/>
      <Outlet/>
   </div>
  )
}

export default DashboardLayout