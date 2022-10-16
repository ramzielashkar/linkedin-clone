import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/Login';
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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
