import { useContext } from 'react';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdOutlineExitToApp,
    MdAccountBalanceWallet,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Logo } from '../Logo';
import { SideNavContainer } from './styles';
import { Link } from 'react-router-dom';


export function SideNav() {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

async function handleLogout () {
    await auth.signout();
    
    navigate("/login");
}

    return (
        <SideNavContainer>
            <Logo />
            <div className="linksContainer">
                <div>
                    <MdDashboard />
                    <Link to="/">Dashboard</Link>
                </div>
                <div>
                    <MdAccountBalanceWallet />
                    <Link to="/new">Novo Registro</Link>
                </div>
                <div>
                    <MdArrowDownward />
                    <Link to="/in">Entradas</Link>
                </div>
                <div>
                    <MdArrowUpward />
                    <Link to="/out">Saídas</Link>
                </div>
                <div>
                    <MdOutlineExitToApp />
                    <a onClick={handleLogout}>Sair</a>
                </div>
            </div>
        </SideNavContainer>
    );
}
