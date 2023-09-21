import { useState } from 'react';
import { useEffect } from 'react';

function Card({ id }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function pokefetch() {
      const res = await fetch(id);
      const data = await res.json();
      setPokemon(data);
    }
    pokefetch();
  }, [id]);

  return (
    <div className='container'>
      <div id='card'>
        <p className='hp'>
          <span>ID</span>
          {pokemon.id}
        </p>
        <img src={'sdu'} />
        <h2 className='poke-name'>{pokemon.name}</h2>
        <div className='types'>
          <span>{'algo'}</span>
          <span>{'algo'}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
