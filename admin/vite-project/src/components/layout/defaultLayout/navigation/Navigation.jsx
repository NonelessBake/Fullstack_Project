import React, { useState } from 'react'
import './Navigation.css'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../../../context/AppContext'
export default function Navigation() {
  let { hefPage } = useContext(AppContext)
  let [statusClick,setSatutusClick] = useState(false)
  let onHandlerChange = (name) => {
    hefPage.map((item) => {
      if (item.name === name) {
        item.status = false;
      } else {
        item.status = true;
      }
    })

  }
  const onHandlerClick = () =>{
    if (!statusClick) {
      setSatutusClick(true);
    } else {
      setSatutusClick(false);
    }
    console.log(statusClick)
  }
  const navListFalse = () => {
    let styleGr = {}
    return hefPage.map((item) => {
      if (item.status) {
        styleGr = {
          backgroundColor: "",
        }
      } else {
        styleGr = {
          backgroundColor: "#2e435f",
        }
      }
      return (
        <li className='nav-item' key={item.name} style={styleGr} onClick={() => onHandlerChange(item.name)}>
          <NavLink to={item.hef} className="nav-link py-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
            <img src={item.img} alt="" className='icon-nav' />
          </NavLink>
        </li>
      )
    })
  }
  const navListTrue= () => {
    let styleGr = {}
    return hefPage.map((item) => {
      if (item.status) {
        styleGr = {
          backgroundColor: "",
        }
      } else {
        styleGr = {
          backgroundColor: "#2e435f",
        }
      }
      return (
        <li className='nav-item d-flex' key={item.name} style={styleGr} onClick={() => onHandlerChange(item.name)}>
          <NavLink to={item.hef} className="nav-link py-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
            <img src={item.img} alt="" className='icon-nav' />
            <span className='ms-3' style={{color:'white'}}>{item.name}</span>
          </NavLink>
        </li>
      )
    })
  }
  return (
    <div className="layout-nav d-flex flex-column flex-shrink-0 w-auto">
      <ul className= {statusClick? "nav nav-pills nav-flush flex-column mb-auto w-100" : "nav nav-pills nav-flush flex-column mb-auto text-center"}
      >
        <i className="bi bi-justify" onClick={()=>onHandlerClick()}></i>
        {statusClick? navListTrue(): navListFalse()}
      </ul>
    </div>
  )
}
