import "./Pokecard.css";

const Pokecard = ({ id, name, type, exp }) => {
  const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="pokecard">
      <h4 className="pokecard-title">{name}</h4>
      <img src={pokemonImage} />
      <p clasName="pokecard-data">{type}</p>
      <p className="pokecard-data">{exp}</p>
    </div>
  );
};

export default Pokecard;
