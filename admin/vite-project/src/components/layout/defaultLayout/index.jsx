import React from 'react'
import Header from './header/Header'
import Navigation from './navigation/Navigation'
import BoxModalSetting from '../../BoxModal/BoxModalFull/BoxModalSetting'
export function DefaultLayout({ children }) {
  return (
    <>
      <BoxModalSetting/>
      <div className='d-flex h-100'>
        <Navigation />
        <div className='d-flex flex-column h-100 w-100'>
          <Header />
          <div className='content'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export const puclicLayout = []
