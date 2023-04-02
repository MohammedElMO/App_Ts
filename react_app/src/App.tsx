import { ErrorInfo, useEffect, useState } from 'react';
import  {apiClient, AxiosError, CanceledError } from "./services/api-Client"
import ReactLoading from "react-loading"
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
    const [isLoading,setIsLoading] = useState(true)
    
  useEffect(() => {
    const requestController = new AbortController()
    
    apiClient
      .get<UIser[]>("/users",
        {
          signal: requestController.signal
        })
      .then(res => {
        setUser(res.data)
        setIsLoading(false)
  })   
      .catch((err: AxiosError) => { 
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false)
      })
    return() => requestController.abort()
  },[])  
  const RemoveUser = (userToDelete: UIser) => {
    const originalDataUsers = [...User]
    setUser(User.filter(user => user.id !== userToDelete.id))
    apiClient.delete("/users/" + userToDelete.id)
      .catch(err => {
        setError(err.message)
        setUser(originalDataUsers)
    })
  }
  const AddUser = () => {
    const originalDataUsers = [...User]
    const newUserIncoming = { id: User.length+1, name: "mohamemd" }
    setUser([...User, newUserIncoming])
    apiClient.post("/users/", newUserIncoming)
      .then(({data :savedUser})=> setUser([savedUser, ...User]))
      .catch(({message:savedAlert}) => {
        setError(savedAlert)
        setUser(originalDataUsers)
      })
  }
  const updateUser = (Unicuser: UIser) => {
    const updatedUser = {...Unicuser , name: Unicuser.name + '?'}
    const originalDataUsers = [...User]
    setUser(User.map(user => user.id === Unicuser.id ? updatedUser : user))
    apiClient
      .patch("/users/" + Unicuser.id, updateUser)
      .catch(err => {
        setError(err.message)
        setUser(originalDataUsers)
        
      }
    )
  }
  return (
    <>
      {error && <p className='text-red-400'>{error}</p>}
      {isLoading && <ReactLoading height={50} color='red' type="bubbles" />}
      <button onClick={AddUser} className="p-4 bg-green-500 rounded text-white m-3">AddUser</button>
      <ul className='  flex flex-col  list-none  rounded m-5'>
        {User.map(user =>
          <li key={user.id} className='border flex items-center p-2 justify-between max-w-2xl'>
            {user.name}
            <div className="flex justify-around w-[50%]  ">
            <button className=" hover:bg-transparent hover:text-yellow-400 bg-yellow-400 text-white border-yellow-200 rounded p-3" onClick={() => updateUser(user)}>Update</button>
            <button onClick={() => RemoveUser(user)} className='border-2  border-red-500 p-3 text-red-500 rounded hover:bg-red-600 hover:text-white'>Delete</button>
            </div>
        </li>)}
    </ul>
    </>
  );
}

export default App;