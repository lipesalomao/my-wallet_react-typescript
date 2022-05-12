import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdOutlineExitToApp,
    MdAccountBalanceWallet,
} from 'react-icons/md';
import { Logo } from '../Logo';
import { SideNavContainer } from './styles';

export function SideNav() {

function handleLogout () {
    //localStorage.removeItem('token');
    //window.location.href = '/';
    console.log('logout');

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
                    <MdArrowUpward />
                    <a href="/in">Entradas</a>
                </div>
                <div>
                    <MdArrowDownward />
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
