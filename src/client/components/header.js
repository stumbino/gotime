import React from 'react';
import '../styles/header.css';
import {history} from '../routers/AppRouter';

const logoClick = () => {
    history.push('/');
}
const Header = () => {
    return (
        <div className="header">
            <img className="logo" height="70vh" width="70vw" onClick={logoClick} src='/public/img/GoTimeLogoBlue.png' />
        </div>
    );
};

export {Header as default};