
import { BrowserRouter as Router} from 'react-router-dom'

import { App } from './app.routes';
import { Auth } from './auth.routes';


export function Routes(){
    const loggedIn = true;

    return (
        <Router>
            { loggedIn ? <App /> : <Auth /> }
        </Router>
    )
}