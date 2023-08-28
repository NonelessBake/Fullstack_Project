import React from 'react'
import './Header.css'


export default function Header() {
    let imgLogo = 'https://wpbingosite.com/wordpress/funio/wp-content/uploads/2020/12/logo2.png'

    return (
        <header className="p-2 shadow-header">
            <div className="container-fluid">
                <div className="w-100 d-flex flex-wrap align-items-center justify-content-between">
                    <div className='header-start d-flex'>
                        <i className="bi bi-justify"></i>
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <img src={imgLogo} alt="Funio–Funiture WooCommerce WordPress Theme" />
                        </a>
                    </div>
                    <div className='header-end d-flex'>
                        
                        <div className="dropdown text-end">
                            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}