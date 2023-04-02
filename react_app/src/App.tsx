import { ErrorInfo, useEffect, useState } from 'react';
import axios, { AxiosError }  from "axios"
const expenses = [
    {id:1,category:"pppp",amount:3,description:"popppo"},
    {id:2,category:"pppp",amount:3,description:"popppo"},
    {id:3,category:"pppp",amount:3,description:"popppo"},
    {id:4,category:"pppp",amount:3,description:"popppo"},
]
  
interface UIser {
  name: string;
  id:number
}

function App() {
    const [User, setUser] = useState<UIser[]>([])
    const [error,setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<UIser[]>("https://jsonplaceholder.typicode.com/3users")
        setUser(res.data)
        
      } catch (error ) {
        setError((error as AxiosError).message)
      }
    }
    fetchUsers() 
  },[])  
  
  return (
    <>
      {error && <p className='text-red-400'>{error }</p>}
      <ul className='grid grid-col-1 list-none border border-gray-600 p-4 '>
        {User.map(user => <li key={user.id}>{user.name }</li>)}
    </ul>
    </>
  );
}

export default App;