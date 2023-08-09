import Form from './Component/Form';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Uservalue from './Component/Tablevalue';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Uservalue/>}/>
        <Route path='/adddetails' element={<Form/>}/>
        <Route path='/update/:id' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
