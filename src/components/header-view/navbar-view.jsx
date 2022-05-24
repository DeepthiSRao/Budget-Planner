import React from 'react';
import { ReactComponent as BannerSvg } from '../../images/header.svg';
import { ReactComponent as MobileBannerSvg } from '../../images/header-mobile.svg';

const NavBar = () => {
    return (
        <>
            <nav className="navbar p-0" style={{ width: '100%'}}>
                <BannerSvg className="container-fluid px-0 d-none d-sm-block" />
                <MobileBannerSvg className="container-fluid px-0 d-sm-none" />
            </nav>
        </>
    );
}
 
export default NavBar;