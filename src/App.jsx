import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Challenge from './components/Challenge/Challenge';
import { Outlet, Route, Routes } from 'react-router-dom';
import Challenge from './components/Challenge/Challenge';
// import AddChallenge from './components/AddChallenge/AddChallenge';
import Question from './components/Question/Question';
import AddQuestion from './components/AddQuestion/AddQuestion';
import Solution from './components/Solution/Solution';

function App() {
  return (
    <Routes>

      <Route path='/'
        element={<>
          <Navbar />
          <Outlet />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>}
      >
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/challenge' element={<Challenge />} />
        {/* <Route path='/addchallenge' element={<AddChallenge />} /> */}
        <Route path='/question/:id' element={<Question />} />
        <Route path='/addquestion' element={<AddQuestion />} />
        <Route path='/solution/:id' element={<Solution />} />
      </Route>
    </Routes>
  )
}

export default App