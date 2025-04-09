import React from 'react'
import Profile from './Profile'
import SideNavbar from './SideNavbar'
import Details from './Details'

const Main = () => {
  return (
    <> 
    <div className='w-full min-h-screen bg-[#030507f8] flex gap-6 p-6'>
      <div className="w-1/4 flex flex-col gap-6">
        <Profile/>
        <SideNavbar/>
      </div>
      <div className="w-3/4">
        <Details/>
      </div>
    </div>
    </>
    
  )
}

export default Main