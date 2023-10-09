import React from 'react';
import './App.css';

const pokemonsData = [
  { id: 1, name: 'Pikachu', 
  image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/375px-0025Pikachu.png', 
  types: 'Electric' 
  },
  { id: 2, 
    name: 'Charmander', 
    image: "https://archives.bulbagarden.net/media/upload/e/e3/0731Pikipek.png",
    types: 'Fire' 
  },
  {
    id: 3,
    name: 'Baxcalibur',
    image: "https://archives.bulbagarden.net/media/upload/7/70/0998Baxcalibur.png",
    types: "Dragon"
  },
  {
    id: 4,
    image: "https://archives.bulbagarden.net/media/upload/b/b0/0411Bastiodon.png",
    name: "Bastiodon",
    types: "Rock"
  },
  {
    id: 5,
    image: "https://archives.bulbagarden.net/media/upload/7/73/0267Beautifly.png",
    name: "Beautifly",
    types: "Bug"
  },
  {
    id: 6,
    image: "https://archives.bulbagarden.net/media/upload/0/0a/0910Crocalor.png",
    name: "	Crocalor",
    types: "Fire"
  },
  {
    id: 7,
    image: "https://archives.bulbagarden.net/media/upload/f/f7/0594Alomomola.png",
    name: "Alomomola",
    types: "Water"
  },
  {
    id: 8,
    image: "https://archives.bulbagarden.net/media/upload/a/ae/0783Hakamo-o.png",
    name: "Hakamo-o",
    types: "Fighting"
  },
  {
    id: 9,
    image: "https://archives.bulbagarden.net/media/upload/c/c5/0430Honchkrow.png",
    name: "Honchkrow",
    types: "Flying"
  },
  {
    id: 10,
    image: "https://archives.bulbagarden.net/media/upload/1/10/0799Guzzlord.png",
    name: "Guzzlord",
    types: "Dragon"
  },
  {id: 11,
    image: "https://archives.bulbagarden.net/media/upload/f/f8/0388Grotle.png",
    name: "Grotle",
    types: "Grass"
  },
  {
    id: 12,
    image: "https://archives.bulbagarden.net/media/upload/0/0d/0190Aipom.png",
    name: "	Aipom",
    types: "Normal"
  }

];

const Pokemon = ({ name, image, types }) => {
  return (
    <div className="pokemon">
      <img className='img' src={image} alt={name} />
      <div className="info">
        <h2>Name: {name}</h2>
        <h2>Type: {types} </h2>
        {/* <p>Types: {types.join(', ')}</p> */}
      </div>
    </div>
  );
};

const PokeGallery = () => {
  return (
    <div className="poke-gallery">
      {pokemonsData.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Pokémon Gallery</h1>
      <div className='pok'>
      <PokeGallery />
      </div>
    </div>
  );
};

export default App;
