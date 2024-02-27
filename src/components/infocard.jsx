const infocard = ({instancia}) => {
  return (
    <div className="card p-4 m-2">
      <p>Edad: {instancia.age}</p>
      <p>Address: {instancia.address['address']}</p>
      <p>Gender: {instancia.gender}</p>
      <p>Birth date: {instancia.birthDate}</p>
      <p>MaidenName: {instancia.maidenName}</p>
    </div>
  )
}

export default infocard