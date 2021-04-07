import { Component } from 'react';

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }

  switchGreeting = () => {
    const { isGreeting } = this.state;
    this.setState({ isGreeting: !isGreeting, });
  };

  render() {
    const { isGreeting } = this.state;
    const { name, children } = this.props;

    return (
      <div className='Greeting-Element'>
        <h1 className='heading' onClick={this.switchGreeting}>
          {isGreeting ? 'Привет' : 'Пока'} {name}
        </h1>
        {children}
        <button>DELETE</button>
      </div>
    );
  }
}

export default Aloha;
