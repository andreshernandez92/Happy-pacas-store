import React from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import './header.styles.scss'
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.components.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
const Header = ({currentUser, hidden}) => (
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
<CartIcon></CartIcon>
</div>
{hidden? null : <CartDropdown></CartDropdown>}

</div>);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
currentUser,
hidden 
});

export default connect(mapStateToProps)(Header);