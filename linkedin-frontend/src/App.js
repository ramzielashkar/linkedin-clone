import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/Login';
import User from './pages/User';
import UserFeed from './pages/UserFeed';
import Profile from './pages/Profile';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={
          <>
            <Landing/>
          </>
        }>
        </Route>

        <Route path='/login' element = {
          <>
          <Login/>
          </>
        }>
        </Route>

        <Route path='/user' element= {
          <User/>
        }>
          <Route path='feed' element = {
            <UserFeed/>
          }>
             </Route>
            <Route path='profile' element = {
            <Profile/>
          }>
             </Route>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
