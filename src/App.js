import './App.css';
import { Component } from 'react';
import AlohaDashboard from './Components/AlohaDashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          firstName: 'Max',
          lastName: 'Din',
        },
        {
          firstName: 'Max1',
          lastName: 'Din',
        },
        {
          firstName: 'Max2',
          lastName: 'Din6',
        },
        {
          firstName: 'Max3',
          lastName: 'Din5',
        },
        {
          firstName: 'Max4',
          lastName: 'Din4',
        },
        {
          firstName: 'Max5',
          lastName: 'Din3',
        },
        {
          firstName: 'Max6',
          lastName: 'Din2',
        },
      ],
    };
  }
  render() {
    const { users } = this.state;
    return (
      <>
        <AlohaDashboard users={users} />
      </>
    );
  }
}
export default App;
