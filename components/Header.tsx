import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/img/logo.png'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="header">
            <div className="grid wide">
                <div className="header__container">
                    <div className="header__logo">
                        <Image 
                            src={logo} 
                            alt="logo" 
                            width="60px"
                            height="60px"
                        />
                    </div>
                    <div className="header__nav">
                        <ul className="header__nav__items">
                            <li className="header__nav__item">
                                <Link href="/anime">
                                    Seasonal Anime
                                </Link>
                            </li>
                            <li>
                                <Link href="/anime/search">
                                    Search
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;