const Pokecard = ({ name, type, exp }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{type}</p>
      <p>{exp}</p>
    </div>
  );
};

export default Pokecard;
