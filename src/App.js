import Button from "./Components/Button";
import './App.css'
import ListItem from "./Components/ListItems";
import { useState, useEffect } from 'react';


const App=()=> {
  const API_URL = 'https://jsonplaceholder.typicode.com/'

  const [item, setItem] = useState([])
  const [reqType, setReqType] = useState('')

  const changePostHandler = (e) => {
    e.preventDefault()
    setReqType(e.target.value)
  }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        const listItems = await response.json()
        setItem(listItems)
      } catch (err) {
        console.log(err.message)
      }
    }
    (() => fetchItems())()
  }, [reqType, setReqType])

  return (
    <>
      <div className='btn-btn-1'>
        <Button buttonText='POST' value='posts' changePostHandler={changePostHandler} />
        <Button buttonText='USERS' value='users' changePostHandler={changePostHandler} />
        <Button buttonText='COMMENTS' value='comments' changePostHandler={changePostHandler} />
      </div>
      <div>
        {item.map((items) => <ListItem items={items} key={items.id} />)}
      </div>
    </>
  );
}

export default App;
