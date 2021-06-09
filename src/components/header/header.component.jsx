import React from 'react';
import {Link } from 'react-router-dom';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../Assets/crown.svg'
import { auth } from '../../firebase/firebase.util'
const Header = ({currentUser}) => (
<div className='header'>
<Link className='Logo-Container' to ="/">
<Logo className='Logo'></Logo>
</Link>
<div className='options'>
    <Link className='option' to ='/shop'>SHOP</Link>
    <Link className='option' to ='/shop'>CONTACT</Link>
{
currentUser ? (
<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
) : (
<Link className='option'to ='/SignIn'>SIGN IN</Link>
)}
</div>
</div>


) 

export default Header;