import React,{ useRef } from 'react';
import './Form.css'
import { toast } from 'react-toastify';
import { loginUserApi } from '../../api/User';

function Login() {

  const emailRef = useRef();
  const passRef = useRef();

  const submit = (e)=>{
    e.preventDefault();
    const email = emailRef.current;
    const password = passRef.current;

    document.querySelector('.btn[color="green"')
    .setAttribute('disabled',true);
    document.querySelector('.btn[color="red"')
    .setAttribute('disabled',true);

    const r = loginUserApi({ email:email.value,password:password.value });
    r.finally(()=>{
      console.log('finally');
      document.querySelector('.btn[color="green"')
      .removeAttribute('disabled')
      document.querySelector('.btn[color="red"')
      .removeAttribute('disabled')
    })
  }
  
  const clear = (e)=>{
    e.preventDefault();
    emailRef.current.value = '';
    passRef.current.value = '';
    toast('input cleared',{type : 'info'});
  }

  return (
    <form className='box'>
        <h1>Login User</h1>
        <input ref={emailRef} className='input' type="email" id="email" placeholder='Email' />
        <input ref={passRef} className='input' type="password" id="password" placeholder='Password' />
        <div>
          <button className='btn' color='green' onClick={submit}>Submit</button>
          <button className='btn' color='red' onClick={clear}>Clear</button>
        </div>
    </form>
  )
}

export default Login