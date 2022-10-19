import React from 'react';
import './Header.css'

class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="logo">
                    FELICITY
                </div>
                <div className="nav">
                    <ul>
                        <li>Accueil</li>
                        <li>Apropos</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;