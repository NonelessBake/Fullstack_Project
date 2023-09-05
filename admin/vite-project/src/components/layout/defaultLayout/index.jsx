import React from 'react'
import Header from './header/Header'
import Navigation from './navigation/Navigation'
export function DefaultLayout({ children }) {
  return (
    <>
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
