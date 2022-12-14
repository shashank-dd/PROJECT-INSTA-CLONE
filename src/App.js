import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Screen from "./screenshot/screenshot"
import Preview from './postview/postview';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Screen/>}/>
   
        <Route path='/postview' element={<Preview/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
