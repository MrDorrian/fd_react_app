import { Component } from 'react';
import PropTypes from 'prop-types';

class Aloha extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }

  switchGreeting = () => {
    const { isGreeting } = this.state;
    this.setState({ isGreeting: !isGreeting });
  };

  deleteHandler = () => {
    const { deleteUser, id } = this.props;
    deleteUser(id);
  };
  render () {
    const { isGreeting } = this.state;
    const { name, isExciting } = this.props;

    return (
      <div className='Greeting-Element'>
        <h1 className='heading' onClick={this.switchGreeting}>
          {isGreeting ? 'Привет' : 'Пока'} {name} {isExciting ? '!' : '.'}
        </h1>
        <button onClick={this.deleteHandler}>DELETE</button>
      </div>
    );
  }
}

Aloha.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isGreeting: PropTypes.bool,
  deleteUser: PropTypes.func,
};
export default Aloha;
