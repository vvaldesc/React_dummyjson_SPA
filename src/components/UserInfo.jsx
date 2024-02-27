import InfoCard from './infocard.jsx';
import useUsers from '../services/useusers.js'; // Import the missing useProducts function
import { useParams } from "react-router-dom";

const UserInfo = () => { // Rename the function to start with an uppercase letter
  const { users, loading, error} = useUsers(); // Wrap the useProducts hook inside a custom hook function
  let id = useParams().id-1;
  return (
    <div>
      {users && <InfoCard instancia={users.users[id]}/>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
    </div>
  )
}

export default UserInfo;