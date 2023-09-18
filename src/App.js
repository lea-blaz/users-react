import Name from './components/Age'
import Age from './components/Name'
import NameAge from './components/NameAge'
import './App.css';

function App() {

  const users = [
    {
      name: 'Koko',
      age: '18'
    },
    {
      name: 'Karolina',
      age: '25'
    },
    {
      name: 'Kiki',
      age: '33'
    }
  ];
  
  return (
    <div className="App">
      <Name />
      <Age />
      <NameAge />
    </div>
  );
}

export default App;
