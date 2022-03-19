import React from 'react';
import imag from './imageInSrc.jpg.jpg';
import './style.css';   

function App() {
  return (


    <div className="App">
    <header className="App-header">
   
    <h1 className='title red' style={{ color: "red", fontSize: 60 }}>Mesbehi Khawla</h1>
    <img className='imagee' src={imag} alt ='imageInSrc'  />
    <br/>
    <img className='imgpub'   src="/image/img1.jpg"/>

<br/>

    <video className='vd' width="500" height="300" controls loop autoPlay muted>

<source src="https://civam.fr/wp-content/uploads/sites/4/2014/10/big_buck_bunny.mp4" type="video/mp4" />

</video>
    </header>
      </div>);
      
  }
 



export default App;
