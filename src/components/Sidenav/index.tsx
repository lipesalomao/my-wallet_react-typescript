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

export function SideNav() {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();

async function handleLogout () {
    await auth.signout();
    
    window.location.href = '/login';  
}

    return (
        <SideNavContainer>
            <Logo />
            <div className="linksContainer">
                <div>
                    <MdDashboard />
                    <a href="/">Dashboard</a>
                </div>
                <div>
                    <MdAccountBalanceWallet />
                    <a href="/new">Novo Registro</a>
                </div>
                <div>
                    <MdArrowDownward />
                    <a href="/in">Entradas</a>
                </div>
                <div>
                    <MdArrowUpward />
                    <a href="/out">Saídas</a>
                </div>
                <div>
                    <MdOutlineExitToApp />
                    <a onClick={handleLogout}>Sair</a>
                </div>
            </div>
        </SideNavContainer>
    );
}
