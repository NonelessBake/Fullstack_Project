import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../../../context/AppContext'
export default function Navigation() {
  let {hefPage} = useContext(AppContext)
  const navList = ()=>{
    return hefPage.map((item) =>{
      return(
        <li className="nav-item" key={item.name}>
          <Link to={item.hef} className="nav-link py-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
            <img src={item.img} alt="" className='icon-nav' />
          </Link>
        </li>
      )})
    }
  return (
    <div className="layout-nav d-flex flex-column flex-shrink-0">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        {navList()}
      </ul>
    </div>
  )
}
