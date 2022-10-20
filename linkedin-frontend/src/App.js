import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Login from './pages/Login';
import User from './pages/User';
import UserFeed from './pages/UserFeed';
import Profile from './pages/Profile';
import Company from './pages/Company';
import CompanyFeed from './pages/CompanyFeed';
import AddJob from './pages/AddJob';
import Applicants from './pages/Applicants';
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen/>
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

        <Route path='/company' element = {
          <Company /> 
        }>
          <Route path='feed' element ={
            <CompanyFeed/>
          }>

          </Route>
          <Route path='applicants' element ={
            <Applicants />
          }>

          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
