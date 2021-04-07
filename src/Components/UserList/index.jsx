import React, { Component } from 'react';
import UserCard from './UserCard';

class UserList extends Component {
  constructor(props) {
    super(props);
     }

  mapUsers = (user) => (
    <UserCard key={user.id} user={user} isChecked={user.isChecked} />
  );

  render() {
    const { users } = this.state;

    return (
      <section>
        <h1>User List From DB</h1>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UserList;
