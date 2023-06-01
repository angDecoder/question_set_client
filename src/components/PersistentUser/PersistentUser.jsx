import React,{ useState,useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { autoLoginUser } from '../../features/userSlice';
import { USER_STATUS } from '../../features/userSlice'
import { Navigate,useLocation } from 'react-router-dom';

function PersistentUser() {

  const [tried, setTried] = useState(false);
  const userStatus = useSelector((state)=>state.user.status);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(()=>{
    if( !tried && userStatus===USER_STATUS.loggedout ){
      dispatch(autoLoginUser());
      setTried(true);
    }
  },[]);


  if(userStatus===USER_STATUS.loggedin)
    return <Outlet />
  else if(tried === true && userStatus===USER_STATUS.loggedout){
    console.log('login',tried,userStatus);
    return  <Navigate to='/login' state={{ from : location.pathname }}/>
  }
  else 
    return <div>Loading ...</div>

}

export default PersistentUser