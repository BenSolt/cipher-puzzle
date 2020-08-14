import React from 'react';
import { useEffect, useState } from 'react';
import './App.scss';
// Riddle CSS
import "./Riddle.scss";



import Cipher from "./Cipher"
import Riddle from "./Riddle"

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    
    <div className='app_container'>

      <div className='title_box1'>
        <div className='title'>
          <h1>TREASURE HUNT</h1>
        </div>
        <div className='title_sub'>
          <h2>by Benjamin Solt</h2>  
        </div>
        
        
          
      </div>
      
      {/* <div className='title_box2'>
        <h2>
          Deployed with{' '}
          <a
            href="https://vercel.com/docs"
            target="_blank"
            rel="noreferrer noopener"
          >
            Vercel
          </a>
        </h2>
      </div> */}
          
     

      <div className='container_middle'>

          <Riddle/>
          
          <Cipher/>
         
      </div>

    
   
     
    </div>
  );
}

export default App;
