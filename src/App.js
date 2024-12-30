import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import RequestList from './Pages/RequestList';
import AdminRequestList from './Pages/AdminRequestList';
import Chart from './Pages/Chart';
import UserAddItem from './Pages/UserAddItem';
import WelcomePage from './Pages/WelcomePage';
import ConfirmAdmin from './Pages/ConfirmAdmin';
import ViewProduct from './Pages/ViewProduct';
import AdminAddItem from './Pages/AdminAddItem';
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
        <Route path='/cart' element={<Chart />} />
        <Route path='/user-add-item' element={<UserAddItem />} />
        <Route path='/admin-add-item' element={<AdminAddItem/>}/>
        <Route path='/welcome-page' element={<WelcomePage />} />
        <Route path='/confirm-admin' element={<ConfirmAdmin />} />
        <Route path='/view-product' element={ <ViewProduct/>} />
   </Routes>
    </div>
  );
}

export default App;
