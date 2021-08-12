import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentUserOperation } from '../redux/auth/authOperations';
import { getIsAuth } from '../redux/auth/authSelector';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.idToken) {
      if (prevProps.idToken !== this.props.idToken) {
        this.props.currentUserOperation();
      }
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

const mapStateToProps = state => ({
  idToken: getIsAuth(state),
});

export default connect(mapStateToProps, { currentUserOperation })(App);
