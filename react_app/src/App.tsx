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
    axios
      .get<UIser[]>("https://jsonplaceholder.typicode.com/3users")
       .then(res =>  setUser(res.data))
        .catch((err:AxiosError )=> setError(err.message))
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