import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: 'Mujahid',
    id: 181496
  }
  var dsn = {
    color: 'pink',
    backgroundColor: 'red'
  }
  let hero = [
    { name: 'Nadim', id: '18141445' },
    { name: 'Aadim', id: '1545454' },
    { name: 'Kadim', id: '18454553' },
    { name: 'Madim', id: '78454553' },
    { name: 'Tadim', id: '88454553' },
    { name: 'Ladim', id: '17548657' }

  ];

const [count,setCount]= useState(5);
// const handleIncrease=()=>{
//   setCount (count+1);

// }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p style={dsn}>
          {person.id + ' ' + person.name}
        </p>
        <h1>counter:: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        {/* 
        <Ppt name={hero[1]}></Ppt>
        <Ppt name={hero[2]}></Ppt>
        <Ppt name={hero[3]}></Ppt> */
        }
        
 

      <Users></Users>
       

          {
            hero.map(nayok =>

              <Ppt name={nayok}></Ppt>

            )
          }
          <ul>
            {
              hero.map(nk=><li>{nk.name} Id is :: {nk.id}</li>)
            }
           
          </ul>


      </header>
    </div>
  );
}
function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])

  return( 
    <div>
      <ul style={{color:'lightblue'}}>
        
      {users.map(user=><li>{user.name}</li>)} 

      </ul>
      {
     
        console.log(users)
     
      }
    </div>
  )

};

function Ppt(props) {
  const styles = {
    color: 'cyan',
    backgroundColor: 'gray',
    border: '5px solid tomato',
    float: 'left',
    margin: '20px 20px',
    boxShadow: '5px 5px 5px tomato',
    width: '300px',
    height: '200px'
  }

  return (
    <div style={styles}>
      <h2>Hero:: {props.name.name}</h2>
      <h2>Id::{props.name.id}</h2>
    </div>
  );
}

export default App;
