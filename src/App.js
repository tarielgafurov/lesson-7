import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Items from './components/Items';

function App() {

  const [data , setData] = useState([])

  const dataChangeHandler = (a) => {
    setData((prevState) => {
      return [...prevState , a]
    })
  }

  const deleteItems = (id) => {
    const newItems = data.filter((el) => {
      return el.id !== id
    })

    setData(newItems)
  }


  return (
    <div className="App">
     <Todo save={dataChangeHandler}/>
      <Items deleteFunc={deleteItems} array={data} />
    </div>
  );

}

export default App;

