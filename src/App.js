import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardDeck from 'react-bootstrap/CardDeck'
import {ScaleLoader,FadeLoader,HashLoader,BeatLoader} from 'react-spinners'

function App() {
  return (
    <div className="App">
     
     <div style={{marginBottom:'20px'}}>
       <h1 style={{color:'#EAF0F1'}}>
         Loader's
       </h1>
       
     </div>
     <div className="card-deck" >
        <div className="card" >
        
          <div className="card-body">
            <h5 className="card-title">Fade Loader</h5>
            <p className="card-text" style={{display:'flex',justifyContent:'center',marginTop:'35px',marginBottom:'35px'}}>
             <FadeLoader 
               loading
               height ={15}
               width={5}
               radius={2}
               margin={2}
               color='#E74292'
             />
             </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Height :15 Radius :2</small>
          </div>
        </div>
        <div className="card" >
         
          <div className="card-body" >
            <h5 className="card-title">Hash Loader</h5>
            <p className="card-text" style={{display:'flex',justifyContent:'center',marginTop:'35px',marginBottom:'35px'}}> 
            <HashLoader 
             size={60}
             color='#01CBC6'
             loading
             />
             </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Size : 60</small>
          </div>
        </div>
        <div className="card" >
         
          <div className="card-body">
            <h5 className="card-title">Scale Loader</h5>
            <p className="card-text" style={{display:'flex',justifyContent:'center',marginTop:'35px',marginBottom:'35px'}}>
            <ScaleLoader
             loading
             height ={35}
             width={4}
             radius={4}
             margin={2}
             color='#EA7773'
            />
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Height :35 Radius :4</small>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
