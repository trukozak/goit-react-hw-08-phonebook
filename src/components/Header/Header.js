import React from 'react';
import { connect } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { HeaderContainer } from './HeaderStyled';

const Header = ({ isAuth}) => {
  return (
    <HeaderContainer>
      <Navigation />
      {isAuth && <UserMenu />}
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
});


export default connect(mapStateToProps)(Header);
