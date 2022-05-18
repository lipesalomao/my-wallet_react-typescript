
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { AuthContext } from '../contexts/Auth/AuthContext';

import { App } from './app.routes';
import { Auth } from './auth.routes';


export function Routes(){
    const auth = useContext(AuthContext);
   
    return (
        <Router>
            { auth.user ? <App /> : <Auth /> }
        </Router>
    )
}