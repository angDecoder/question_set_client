import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Form/Login';
import Register from './components/Form/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Challenge from './components/Challenge/Challenge';
import { Outlet, Route, Routes } from 'react-router-dom';

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
      </Route>
    </Routes>
  )
}

export default App