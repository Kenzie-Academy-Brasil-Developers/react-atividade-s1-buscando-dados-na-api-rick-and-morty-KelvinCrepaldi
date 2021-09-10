import "./style.css";

const CharCard = ({ char }) => {
  return (
    <div className="card">
      <img src={char.image} alt={char.image}></img>
      <label>Name: {char.name}</label>
      <label>Status: {char.status}</label>
      <label>Species: {char.species}</label>
      <label>Gender:{char.gender}</label>
    </div>
  );
};

export default CharCard;
