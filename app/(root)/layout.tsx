import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const Layout = ({childern}:{childern: React.ReactNode}) => {
  return (
    <main className='root'>
        {<Sidebar/>}
        {<MobileNav/>}
        
        <div className='root-container'>
            <div className='wrapper'>
            {childern}

            </div>

        </div>
        
    </main>
  )
}

export default Layout
