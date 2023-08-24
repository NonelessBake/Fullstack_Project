import React from 'react'
import Header from './header/Header'
import Navigation from './navigation/Navigation'
export function DefaultLayout({children}) {
  return (
    <div>
        <Header/>
        <div className='d-flex'>
            <Navigation/>
            <div className='content'>
                {children}
            </div>
        </div>
    </div>
  )
}

export const puclicLayout = []
