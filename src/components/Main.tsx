import React from 'react'
import Profile from './Profile'
import SideNavbar from './SideNavbar'

const Main = () => {
  return (
    <> 
    <div className='w-full min-h-screen bg-[#030507f8] flex p-6'>
      <div className="w-1/4 flex flex-col gap-6">
        <Profile/>
        <SideNavbar/>
      </div>
      <div className="w-3/4">
        right
      </div>
    </div>
    </>
    
  )
}

export default Main