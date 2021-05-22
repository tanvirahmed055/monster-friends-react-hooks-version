import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [count, setCount] = useState(0) // for demo purposes

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setMonsters(users)});
    // console.log(count)
  },[]) // if you add count, only run if count changes.

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredMonsters = monsters.filter(monster =>{
    return monster.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  return !monsters.length ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>MonsterFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>
      </div>
    );
}

export default App;