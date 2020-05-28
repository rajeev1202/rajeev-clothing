import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './headerComponent.css';


const Header = () =>(
<div className='header'>
<Link  className='logo-container' to='/'>
    <Logo className='logo' />
</Link>

<div className='header-links'>
<Link className='shop-link' to='/shoppage'>SHOP</Link>
<Link className='contacts-link'>CONTACTS</Link>
</div>
</div>


);
export default Header;
