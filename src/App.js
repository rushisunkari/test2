// App.js or your main app file
import React from 'react';
import {BrowserRouter,Switch,Route,Routes} from 'react-router-dom'
import SignUpForm from  './components/SignUpForm/index'
import LoginForm  from './components/LoginForm';
import NotFound from './components/NotFound'
import Home from './components/Home'
import Webcam from './components/Webcam';
import Blogs from './components/Blogs'
import './App.css'

const App = () => (
 <BrowserRouter>
 <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/register" element={<SignUpForm/>}/>
  <Route  path="/login" element={<LoginForm/>}/>
  <Route path="/Webcam" element={<Webcam/>}/>
  <Route path="/Blogs" element={<Blogs/>}/>
 </Routes>
 </BrowserRouter>
)

export default App;
