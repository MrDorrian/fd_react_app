import React, { Component } from 'react';
import styles from './SignInForm.module.css';
import cx from 'classnames';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ email: '', password: '' });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <form className={styles.container}>
        <input
          onChange={this.handleChange}
          value={email}
          className={styles.input}
          type='email'
          name='email'
          placeholder='email'
        />
        <input
          onChange={this.handleChange}
          value={password}
          className={styles.input}
          type='password'
          name='password'
          placeholder='password'
        />
        <input
          onClick={this.handleSubmit}
          className={styles.input}
          type='submit'
        />
      </form>
    );
  }
}

export default LoginForm;
