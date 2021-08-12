import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  loginOperation,
  registerOperation,
} from '../../redux/auth/authOperations';
import AuthFormStyled from './AuthFormStyled';

const initialState = { name: '', email: '', password: '' };

class AuthForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.location.pathname === '/register'
      ? this.props.registerOperation(this.state)
      : this.props.loginOperation({ email, password });
    this.setState({ ...initialState });
  };

  render() {
    const { name, email, password } = this.state;
    const { pathname } = this.props.location;
    return (
      <AuthFormStyled autoComplete="off" onSubmit={this.onHandleSubmit}>
        {pathname === '/register' && (
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              autoComplete="on"
              pattern="^[A-ZA-ZА-ЯА-Я]+(([' -][A-ZA-ZА-ЯА-Я])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
              onChange={this.onHandleChange}
            />
          </label>
        )}
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="blabla@gmail.com"
            autoComplete="on"
            required
            value={email}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            minLength="5"
            autoComplete="on"
            required
            value={password}
            onChange={this.onHandleChange}
          />
        </label>
        <button type="submit">
          {pathname === '/register' ? 'Register' : 'Login'}
        </button>
      </AuthFormStyled>
    );
  }
}

export default connect(null, { registerOperation, loginOperation })(
  withRouter(AuthForm),
);
