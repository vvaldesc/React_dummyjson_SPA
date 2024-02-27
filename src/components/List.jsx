import './List.css';
/* eslint-disable react/prop-types */

const List = ({ instancias }) => {
  return (
    <ul>
      {instancias.map((instancia, index) => {
        return <li key={index}><><img src={instancia.images[0]}></img><p>{instancia.title}</p></></li>
      })}
    </ul>
  );
};

export default List;
