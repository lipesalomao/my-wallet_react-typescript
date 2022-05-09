import { Logo } from "../Logo";
import { LoginContainer } from "./styles";

export function LoginComponent(){
    return (
        <LoginContainer>
            <Logo/>
            <div className="formContainer">
                <span className="title">
                    Entrar
                </span>
                <span className="titleUnderline"></span>
                <input type="text" />
                <input type="password" />

                <button>Entrar</button>
            </div>

            <a href="/singIn">Criar minha conta</a>
        </LoginContainer>
    )
}