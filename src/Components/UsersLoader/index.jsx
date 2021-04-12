import React, { Component } from 'react';
import { getUsers } from '../../api';
import Spinner from '../Spinner';

class UsersLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: false,
      currentPage: 1,
    };
  }

  componentDidMount () {
    this.load();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.load();
    }
  }

  load = () => {
    const { currentPage } = this.state;

    getUsers({ page: currentPage })
      .then(data => {
        this.setState({
          users: data.results,
        });
      })
      .catch(() => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({
          isFetching: false,
        });
      });
  };

  prevPage = () => this.setState({ currentPage: this.state.currentPage - 1 });
  nextPage = () => this.setState({ currentPage: this.state.currentPage + 1 });

  render () {
    const { users, isFetching, isError } = this.state;

    return (
      <div>
        <h1>USER LIST</h1>
        <div>
          <button onClick={this.prevPage}>Prev</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
        {isFetching && <Spinner />}
        {isError && <div>ERROR</div>}
        <ul>
          {users.map(user => {
            return (
              <li key={user.login.uuid}>{JSON.stringify(user, null, 4)}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UsersLoader;
