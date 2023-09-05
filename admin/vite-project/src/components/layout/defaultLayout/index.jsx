import React from 'react'
import Header from './header/Header'
import Navigation from './navigation/Navigation'
export function DefaultLayout({children}) {
  return (
    <div>
        <Header/>
        <div className='d-flex'>
            <Navigation/>
            <div className='content' style={{height:'calc(100vh - 64px)'}}>
                {children}
            </div>
        </div>
    </div>
  )
}

export const puclicLayout = []
