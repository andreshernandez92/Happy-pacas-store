import React from 'react';
import {Link } from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../Assets/crown.svg'
const Header = () => (
<div className='header'>
<Link className='Logo-Container' to ="/">
<Logo className='Logo'></Logo>
</Link>
<div className='options'>
    <Link className='option' to ='/shop'>SHOP</Link>
    <Link className='option' to ='/shop'>CONTACT</Link>
</div>
</div>


) 

export default Header;