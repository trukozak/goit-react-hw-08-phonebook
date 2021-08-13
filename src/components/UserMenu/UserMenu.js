import React from 'react';
import { connect } from 'react-redux';
import { logOutOperation } from '../../redux/auth/authOperations';
import { getUserName } from '../../redux/auth/authSelector';
import { UserMenuStyled } from './UserMenuStyled';

const UserMenu = ({ username, logOutOperation }) => {
  return (
    <UserMenuStyled>
      <p className="text">
        Welcome, <span className="">{username}</span>
      </p>
      <button className="" type="button" onClick={()=>logOutOperation()}>
        Logout
      </button>
    </UserMenuStyled>
  );
};

const mapStateToProps = state => ({
  username: getUserName(state),
});

export default connect(mapStateToProps, { logOutOperation })(UserMenu);
