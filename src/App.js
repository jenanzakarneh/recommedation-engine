import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
         <Route path="/home" element={<h1>Home</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={ <Signup/>} />
   </Routes>
    </div>
  );
}

export default App;
