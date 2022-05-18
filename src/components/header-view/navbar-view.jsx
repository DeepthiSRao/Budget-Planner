import React from 'react';
import { ReactComponent as BannerSvg } from '../../images/header.svg';

const NavBar = () => {
    return (
        <>
            <nav className="navbar p-0">
                <BannerSvg className="container-fluid px-0" />
            </nav>
        </>
    );
}
 
export default NavBar;