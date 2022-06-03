import { useState } from 'react'

import { Link } from 'react-router-dom'
import { LINK_ROUTES } from '../../assets/js/LINK_ROUTES'


export function Header() {
    

    const [ isActive, setIsActive ] = useState(false);
    const [ number, setNumber ]     = useState(1); 

    function setIsActiveToggle() {
        setIsActive(!isActive)
    }

    function setNumberN(num) {
        setNumber(num);
    }
    
    return (
        <>
        <div className="header-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 site-name-container">
                      
                        <Link to={LINK_ROUTES.INDEX}> 
                            <h1 className="site-name">Meg Laboratory </h1>
                        </Link>
                    </div>
                    <div className="mobile-menu-icon">
                        <i onClick={setIsActiveToggle} className="fa fa-bars"></i>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-8 templatemo-nav-container">
                        <nav className={ isActive ? 'templatemo-nav active' : 'templatemo-nav'}>
                            <ul>
                                <li> 
                                    <Link to={LINK_ROUTES.INDEX} onClick={ ()=> setNumberN(1) } className={ number === 1 ? "active" : "" } >HOME</Link>
                                </li>

                                <li> 
                                    <Link to={LINK_ROUTES.RESEARCH} onClick={ ()=> setNumberN(2) } className={ number === 2 ? "active" : "" } >RESEARCH</Link>
                                </li>

                                <li> 
                                    <Link to={LINK_ROUTES.SOLUTION} onClick={ ()=> setNumberN(3) } className={ number === 3 ? "active" : "" } >SOLUTION</Link>
                                </li>

                                <li> 
                                    <Link to={LINK_ROUTES.ABOUT} onClick={ ()=> setNumberN(4) } className={ number === 4 ? "active" : "" } >About Us</Link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

       
        </>
    )
}

