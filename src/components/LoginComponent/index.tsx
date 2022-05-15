import { useState } from "react";
import { login } from "../../services/global-service";
import { Logo } from "../Logo";
import { LoginContainer } from "./styles";

export function LoginComponent(props: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function loginHandler() {
        //save token on localsorage
        //redirect to home
        login(email, password).then((res: any) => {
            if(res.status === 200 && res.data.length > 0) {
                sessionStorage.setItem("token", JSON.stringify(res.data));
                console.warn(res)
                window.location.href = "/";
            }
            
        }).catch(err => {
            console.log(err);
        }); 
    }

    return (
        <LoginContainer>
            <Logo />
            <div className="formContainer">
                <div>
                    <span className="title">Entrar</span>
                    <div className="titleUnderline"></div>
                </div>
                <input type="email" placeholder="exemple@email.com" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="******" onChange={e => setPassword(e.target.value)}/>

                <button onClick={()=>{loginHandler()}} disabled={!email || !password}>Acessar</button>
            </div>

            <a href="/singUp">Criar minha conta</a>
        </LoginContainer>
    );
}
