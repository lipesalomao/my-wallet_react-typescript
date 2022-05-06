import { LogoContainer } from "./styles";
import logoImg from '../../assets/usd.svg'

export function Logo() {
    return (
        <LogoContainer>
            <div>
                <img src={logoImg} />
            </div>
            <h2>Minha Carteira</h2>
        </LogoContainer>
    );
}
