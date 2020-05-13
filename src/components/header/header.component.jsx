import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';
const Header = ({currentUser, hidden}) =>
{
    return <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
    
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {currentUser ? <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink to='/signin'>SIGN IN</OptionLink>}
            <CartIcon/>
        </OptionsContainer>
        {hidden ? null :  <CartDropdown/>}
    </HeaderContainer>
    
}

const mapStateToProps =  createStructuredSelector({ currentUser: selectCurrentUser, hidden: selectCartHidden})

export default connect(mapStateToProps)(Header);