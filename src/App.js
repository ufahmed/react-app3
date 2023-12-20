
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="John"
        lastName="Doe"
        age={30}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Alice"
        lastName="Smith"
        age={25}
        hairColor="Blonde"
      />
      <PersonCard
        firstName="Michael"
        lastName="Johnson"
        age={28}
        hairColor="Black"
      />
      <PersonCard
        firstName="Emily"
        lastName="Williams"
        age={35}
        hairColor="Red"
      />
    </div>
  );
}

export default App;
