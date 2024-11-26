import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Login/>} />
         <Route path="/home" element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={ <Signup/>} />
   </Routes>
    </div>
  );
}

export default App;
