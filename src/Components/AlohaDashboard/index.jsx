import { Component } from 'react';
import Aloha from '../Greeting';

class AlohaDashboard extends Component {
  mapAloha = (user) => (
    <li>
      <Aloha name={`${user.firstName} ${user.lastName}`} />
    </li>
  );

  render() {
    const { users } = this.props;

    return <ul>{users.map(this.mapAloha)}</ul>;
  }
}

export default AlohaDashboard;
