import { Component } from 'react';
import Aloha from '../Aloha';

class AlohaDashboard extends Component {
  mapAloha = (user) => (
    <li>
      <Aloha key={user.id} name={`${user.firstName} ${user.lastName}`} />
    </li>
  );
  deleteUser = (idToDelete) => {
    const { users } = this.props;
    const usersCopy = JSON.parse(JSON.stringify(users));

    this.setState({
      users: usersCopy.filter((user) => user.id !== idToDelete),
    });
  };
  render() {
    const { users } = this.props;

    return <ul>{users.map(this.mapAloha)}</ul>;
  }
}

export default AlohaDashboard;
