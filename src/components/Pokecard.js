const Pokecard = ({ id, name, type, exp }) => {
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div>
      <p>{name}</p>
      <img src={pokemonImage} />
      <p>{type}</p>
      <p>{exp}</p>
    </div>
  );
};

export default Pokecard;
