import React, { Profiler } from 'react';
import LejourIcon from '../images/logo-lejour.svg';
import { Redirect } from 'react-router-dom';
import ImgLogin from '../images/torrente.jpg';



function Navbar() {
    return (
        <nav>
            <div className="navbar">
                <div class="menu">
                    <div class="lejour-icon">
                        <img src={ LejourIcon } />
                    </div>
                    <ul>
                        <li><a className="direct1" href="/invoices">Invoices</a></li>
                        <li><a className="direct1" href="/appointments">Appointments</a></li>
                        <li><a className="direct1" href="/weddings">Weddings</a></li>
                        <li><a className="direct1" href="/providers">Providers</a></li>
                    </ul>
                </div>
                <h3 className="profile-name">Olá, Gustavo Torrente</h3>
                <div class="profile-icon">
                    <img src={ImgLogin} />
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;