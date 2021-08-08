import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import LoaderComp from './components/loader.jsx';
import ReactDOM from 'react-dom';
import Card from './components/Card.jsx';

var isClicked=false;

function App() {

  const [users,setUsers]=useState([])

  async function onSubmit(){
    const response=await fetch('https://reqres.in/api/users?page=1');
    var data=await response.json()
     setUsers(data.data);
  }

  function Load(){
    if (isClicked===true){
      ReactDOM.render(<LoaderComp />,document.getElementById('l'));
      setTimeout(function(){  }, 3000);
    }
  }


  return (
    <div class="b">
    <h1>Task 2-Intermediate</h1>
    <div class="Button">
    <Button onClick={()=>{
      isClicked=true;
      Load();
      onSubmit();}} variant="contained" color="primary">
      Get Users
    </Button>
    <div id="l"></div>
    <div class="user">
    {
      users.map((user,index) =>
      <Card
      url={user.avatar}
      fname={user.first_name}
      lname={user.last_name}
      email={user.email}
      />
  )
    }
    </div>
    </div>
    </div>
  );
}

export default App;
