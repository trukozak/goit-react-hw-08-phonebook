import React from 'react';
import { connect } from 'react-redux';
import { getIsAuth } from '../../redux/auth/authSelector';
import { mainRoutes } from '../../routes/mainRoutes';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavigationContainer } from './NavigationStyled';

const Navigation = ({isAuth}) => {
  return (
    <NavigationContainer>
      <ul className="navList">
        {mainRoutes.map(route => (
          <NavigationItem {...route} key={route.path} isAuth={isAuth}/>
        ))}
      </ul>
    </NavigationContainer>
  );
};
const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(Navigation);
