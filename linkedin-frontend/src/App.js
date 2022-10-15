import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
