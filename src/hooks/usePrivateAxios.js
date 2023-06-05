import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshToken } from '../features/userSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,useLocation } from 'react-router-dom';

function isTokenExpired(token) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
}


function usePrivateAxios() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    let accessToken = useSelector(state=>state.user.accessToken);
    // console.log('orig',accessToken);

    const ax = axios.create({
        baseURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}`,
    });

    useEffect(() => {
        const reqInterceptor = ax.interceptors.request.use(
            async (config) => {
                
                if( isTokenExpired(accessToken) ){
                    try {
                        const res = await dispatch(refreshToken());
                        accessToken = res.payload.accessToken;
                    } catch (error) {
                        toast.warning('Refresh token expired: login again');
                        navigate('/login',{ state : { from : location.pathname } });
                        return new axios.Cancel('Operation canceled by the user.');
                    }
                }
                config.headers.Authorization = `Bearer ${accessToken}`;
                return config;
            },
            (error) => Promise.reject(error)
        )

        return () => {
            ax.interceptors.request.eject(reqInterceptor);
        }
    }, []);

    return ax;
}

export default usePrivateAxios