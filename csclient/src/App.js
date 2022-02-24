
import { useSelector } from 'react-redux';
import './App.css';
import Creatospace from './components/Creatospace';
import { selectUser } from './feature/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <Creatospace/>
    </div>
  );
}

export default App;
