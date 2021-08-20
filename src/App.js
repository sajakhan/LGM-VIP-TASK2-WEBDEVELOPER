import logo from './logo.svg';
import './App.css';
import React,{ useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css'

const App=() => {
	const [users,setUser]=useState([]);

const loadusers= async()=>{
	// console.log('before')
	const response=await fetch
	('https://api.github.com/users');
    const jsonresponse = await 
    response.json();
    setUser(jsonresponse);
}
  return (
    <div className="App">
    <div>
    <h1>TASK 2 OF WEB DEVELOPER INTERNSHIP</h1>

<div className='nav'>
      <div className='title'>
        <h1>Users</h1>
      </div>
      <div className='button'>
        <button onClick={loadusers}
        > click me </button>
      </div>
    </div>
<h2>Users:</h2>
    <ul>
    {users.map(({id,login,avatar_url
    }) => (
    <div className='box'>
       <img src=
  {avatar_url} />
    	<li>

    	 ID:
    	{id}, 
    	Name:
    	{ login}


    	 </li>
    	 </div>

    	))}
    </ul>

    	</div>
    
    </div>
  );
}

export default App;
