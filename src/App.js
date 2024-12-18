import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import RequestList from './Pages/RequestList';
import AdminRequestList from './Pages/AdminRequestList';
import Chart from './Pages/Chart';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Login/>} />
         <Route path="/home" element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/request-list' element={<RequestList />} />
        <Route path='/admin-request-list' element={<AdminRequestList />} />
        <Route path='/chart' element={<Chart/>} />
   </Routes>
    </div>
  );
}

export default App;
