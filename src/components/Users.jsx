import ListUsers from './Listusers.jsx';
import useUsers from '../services/useusers.js'; // Import the missing useProducts function
import { Outlet } from "react-router-dom";

const Users = () => { // Rename the function to start with an uppercase letter
  const { users, loading, error} = useUsers(); // Wrap the useProducts hook inside a custom hook function
  console.log(users)
  return (
    <div className='d-flex justify-content-center'>
      {users && <ListUsers instancias={users.users}/>}
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}
      <Outlet/>
    </div>
  )
}

export default Users;