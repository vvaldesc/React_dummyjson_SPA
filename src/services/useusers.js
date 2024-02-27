import { useState, useEffect } from 'react'
const url = 'https://dummyjson.com/users';

const useUsers = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState('Loading');
    useEffect(() => {
      fetch((url))
        .then((data)=>data.json())
        .then((data)=>{setUsers(data); setLoading(null)})
      .catch((error) => setError(error))
    }, [])
  return (
    { users: users || null, loading: loading || null, error: error || null }
  )
}

export default useUsers