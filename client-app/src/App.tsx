import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/api/MovieActivities/').then(response =>{
      console.log(response);
      setActivities(response.data);
    })
  },[])



  return (
    <div>
      <Header as='h2' icon='users' content='Movies'/>
        <List>
            <ul>
               {activities.map((a : any) => (
                 <List.Item key={a.Id}>
                   {a.title}
                 </List.Item>
               ))}
             </ul>
        </List>
    </div>
  );
}

export default App;
