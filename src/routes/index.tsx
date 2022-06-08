
import { useContext } from 'react';
import { BrowserRouter as Router, useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/Auth/AuthContext';
import { App } from './app.routes';
import { Auth } from './auth.routes';

export function Routes(){
    const auth: any = useContext(AuthContext);
       
    return (
        <Router>
            { auth.user ? <App /> : <Auth /> }
        </Router>
    )
}