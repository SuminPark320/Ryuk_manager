import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Board from './components/Board';



// const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://13.124.69.102:5000/team/all/', true);
//   xhr.send();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const data = JSON.parse(xhr.responseText);
//       console.log(data);
//     }
//   };

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
        <Route path='/mainpage/*' element={<MainPage />} />
        <Route path='/board/*' element={<Board />} />
        <Route path='*' element={<Errror />} />
      </Routes>
    </>
  );
}

export default App;

// export default function App() {
//   return(
//     <h1 className = 'text-3xl font-bold underline'>
//       Hello World!
//     </h1>
//   )
// }