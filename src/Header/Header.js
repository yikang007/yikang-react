import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
    render() {
        return <div className="header">
            <div className="header-box">
                <a>Okr</a>
                <div className="land">
                    <span className="landing bbb">登陆</span>
                    <span className="register bbb">注册</span>
                </div>
            </div>
            
        </div>
    }
}

export default Header;