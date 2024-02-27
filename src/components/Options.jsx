import usersImage from '../assets/images/usuarios.png';
import productsImage from '../assets/images/productos.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

import { Link } from 'react-router-dom';

const Options = () => {
  return (
    <div className='d-flex m-4 justify-content-center'>
      <Link to='/users'><img className='card' src={usersImage} alt="Usuarios"></img></Link>
      <Link to='/products'><img className='card' src={productsImage} alt="Productos"></img></Link>
    </div>
  )
}

export default Options