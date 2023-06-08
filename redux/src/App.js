import React from 'react';
import './App.css';
import Storedata from './storedata';
import Formlogin from './formlogin';
function App() {
  return (
    <div className=" ">
     <div style={{display:"flex",justifyContent:"center",height:"50vh",alignContent:"center",margin:"50px"}}><Formlogin/></div> 
    <div style={{display:"flex",justifyContent:"center"}}><Storedata/></div> 
    </div>
  );
}

export default App;
