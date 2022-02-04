import React, {useState, useEffect} from 'react';
import { IUser } from './IUser';
import { GetDataPromise } from './getDataPromise';
import { Card } from './Card';
import './App.css'

const App: React.FC = () => {
  const limit = 5
  const [skip, setSkip] = useState(0)
  const [users, setUsers] = useState<IUser[]>([])
  const onClick = () => {
    GetDataPromise((receivedUsers: IUser[]) => {
      setSkip(skip + limit)
      setUsers([...users, ...receivedUsers])
    })(skip, limit)
  }
  useEffect(onClick, [])

  return (
    <div className='App'>{
      users.map((user: IUser, key: number)=> (<Card click={onClick} user={user} key={key.toString()} />))
    }
    </div>
  )
}

export default App;
