import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
       <header className="header">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="logo">
                        <Link href="/"><img src="/freedaz.pdf.png" alt="Logo" /></Link>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse justify-content-center" id="header-menu">

                            <ul className="navbar-nav primary-menu">
                                <li className="nav-item ">
                                    <Link href="/books" className="">Books </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link href="/authors" className="">Authors </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link href="/contact" className="">Contact Us </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link href="/blog" className="">Blog </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col-6 col-lg-3 col-md-6">
                    <div className="menu-icons d-flex text-right align-items-center justify-content-end">
                        <div className="search-box">
                            <Link href="#" className="search-open"><i className="ti-search"></i></Link>
                        </div>
                        <div className="user-dropdown">
                            <Link href="#" data-toggle="modal" data-target="#login-box" className="open-login-box">
                                <i className="ti-lock"></i>
                            </Link>
                        </div>
                        <div className="languages">
                            <Link href="#" className="lang-select" data-toggle="dropdown" role="button" aria-haspopup="true"
                                aria-expanded="false"><i className="ti-world"></i></Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item active" href="/languageChange/en_US"><i
                                            className="flag flag-us"></i> English
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="menu-toggler" data-toggle="collapse" data-target="#header-menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="search-header hide">
                        <form action="/book/search" method="post">
                            <input className="form-control search-input" name="searchText" aria-describedby="search"
                                type="search" />
                            <button type="submit" className="btn" id="header-search"><i className="ti-search"></i></button>
                            <span className="search-close">
                                <i className="ti-close"></i>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}
