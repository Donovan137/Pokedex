import Card from './ui/card';
import './app.css';

// const arr = [1, 2, 3];
// const allPokemons = Array(150).fill(1);
const allPokemons = [];
for (let i = 1; i <= 150; i++) {
  allPokemons.push('https://pokeapi.co/api/v2/pokemon/' + i);
}

function App() {
  return allPokemons.map(id => <Card key={id + 1} id={id} />);
}

export default App;
