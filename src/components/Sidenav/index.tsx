import { Logo } from "../Logo";
import { SideNavContainer } from "./styles";
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdOutlineExitToApp,
    MdAccountBalanceWallet,
    
    MdExitToApp,
} from "react-icons/md";

export function SideNav() {
    return (
        <SideNavContainer>
            <Logo />
            <div className="linksContainer">
                <div> <MdDashboard/> <a href="/">Dashboard</a></div>
                <div> <MdAccountBalanceWallet/> <a href="/NewTransaction">Novo Registro</a></div>
                <div> <MdArrowUpward/> <a href="/Deposits">Entradas</a></div>
                <div> <MdArrowDownward/> <a href="/Withdraws">Saídas</a></div>
                <div> <MdOutlineExitToApp/> <a href="/">Sair</a></div>
            </div>
        </SideNavContainer>
    );
}
