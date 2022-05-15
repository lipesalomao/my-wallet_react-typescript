
import { useEffect, useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import { App } from './app.routes';
import { Auth } from './auth.routes';


export function Routes(){

    const [isLogged, setIsLogged] = useState(false);

    //check if user is logged
    useEffect(() => {
        if(sessionStorage.getItem("token")){
            setIsLogged(true);
        }
    }, []);

    return (
        <Router>
            { isLogged ? <App /> : <Auth /> }
        </Router>
    )
}