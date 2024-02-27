/* eslint-disable react/prop-types */
const Infocardproduct = ({instancia}) => {
  console.log(instancia)
    return (
      <div className="card p-4 m-2">
        <p>Marca: {instancia.brand}</p>
        <p>Descripción: {instancia.description}</p>
        <p>Precio: {instancia.price}</p>
        <p>Puntuación: {instancia.rating}</p>
        <p>Descuento: {instancia.discountPercentage}</p>
        <img src={instancia.images[0]}></img>
      </div>
    )
  }
  
  export default Infocardproduct