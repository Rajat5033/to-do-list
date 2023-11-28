import React, {}  from 'react'
import './App.css';
import Todolist from './component/Todolist';
import News from './component/News';
import Textutils from './component/Textutils';
import { Globalstore } from './component/store';

function App() {
 
  return (
    <Globalstore>
  <div className="App">
       <Todolist/>
       <News />
       <Textutils/>
     </div>
    </Globalstore>
    
    
   );
  }
  
  

export default App;