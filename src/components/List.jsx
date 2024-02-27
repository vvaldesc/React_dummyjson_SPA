import './List.css';
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const List = ({ instancias }) => {
  return (
    <ul>
      {instancias.map((instancia, index) => {
        return <Link key={index} to={`/product/${index+1}`}><li ><><img src={instancia.images[0]}></img><p>{instancia.title}</p></></li></Link>
      })}
    </ul>
  );
};

export default List;
