import './List.css';
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const List = ({ instancias }) => {
  return (
    <ul className='d-flex flex-column m-2'>
        {instancias.map((instancia, index) => {
        return <li className='m-4' key={index}><Link to={`/users/${instancia.id}`}><img src={instancia.image}></img><p>{instancia.username}</p></Link></li>
      })}
    </ul>
  );
};

export default List;
