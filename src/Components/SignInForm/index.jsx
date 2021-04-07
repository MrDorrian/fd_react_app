import React, { Component } from 'react';
import styles from './SignInForm.module.css';
import cx from 'classnames';

const initialState = {
  email: '',
  password: '',
  isemailValid: true,
  isPasswordValid: true,
};
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ ...initialState });
  };

  handleChange = ({ target: { value, name } }) => {
    if (value.includes(' ')) {
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    const { email, password, isemailValid, isPasswordValid } = this.state;

    const emailClassNames = cx(styles.input, {
      [styles.invalidInput]: !isemailValid,
    });
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={email}
          className={emailClassNames}
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

export default SignInForm;
