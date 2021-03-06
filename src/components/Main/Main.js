import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/authSelector';
import { mainRoutes } from '../../routes/mainRoutes';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import { AppLoader } from '../Loader/Loader';

const Main = ({ isAuth }) => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Switch>
        {mainRoutes.map(({ isPrivate, path, exact, component, restricted }) =>
          isPrivate ? (
            <PrivateRoute
              path={path}
              exact={exact}
              component={component}
              key={path}
              isAuth={isAuth}
            />
          ) : (
            <PublicRoute
              path={path}
              exact={exact}
              component={component}
              key={path}
              isAuth={isAuth}
              restricted={restricted}
            />
          ),
        )}
      </Switch>
    </Suspense>
  );
};

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
});

export default connect(mapStateToProps)(Main);
