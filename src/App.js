import './App.css';
import Aloha from './Components/Aloha';
import UserCard from './Components/UserList/UserCard';
import Calendar from './Calendar';
import UserList from './Components/UserList';
import Counter from './Task';

function App() {
  const users = [
    {
      id: 1,
      firstName: 'Max00',
      lastName: 'Dund',
    },
    {
      id: 2,
      firstName: 'Max01',
      lastName: 'Dund1',
    },
  ];
  return (
    <>
      <Calendar />
    </>
  );
}

export default App;
