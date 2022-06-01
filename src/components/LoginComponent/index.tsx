import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Logo } from "../Logo";
import { LoginContainer } from "./styles";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

export function LoginComponent(props: any) {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const api = useApi();

    async function loginHandler() {
        if (email && password) {
            const isLogged = await auth.signin(email, password);

            if (isLogged) {
                navigate("/");
            }
        }
    }

    async function registerHandler() {
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                const response = await api.validateUser(name, email, password);
                
            } else {
                alert("Passwords do not match"); // temp
            }
        }
    }

    if (props.type === "signup") {
        return (
            <LoginContainer type="signup">
                <Logo />
                <form className="formContainer">
                    <div>
                        <span className="title">Cadastrar</span>
                        <div className="titleUnderline"></div>
                    </div>
                    
                    <div>
                        <MdPerson className="icon"/>
                        <input
                            type="text"
                            autoComplete="off"
                            placeholder="Seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <MdEmail className="icon"/>
                        <input
                            type="email"
                            placeholder="Seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <MdLock className="icon"/>
                        <input
                            type="password"
                            autoComplete="off"
                            placeholder="Digite sua senha"
                            minLength={6}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <MdLock className="icon"/>
                        <input
                            type="password"
                            autoComplete="off"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={() => {
                            registerHandler();
                        }}
                        disabled={
                            !email || !password || !confirmPassword || !name
                        }
                    >
                        Cadastrar-se
                    </button>
                </form>

                <Link to="/login">Já tenho uma conta</Link>
            </LoginContainer>
        );
    }

    return (
        <LoginContainer type="login">
            <Logo />
            <form className="formContainer">
                <div>
                    <span className="title">Entrar</span>
                    <div className="titleUnderline"></div>
                </div>
                <div>
                    <MdEmail className="icon"/>
                    <input
                        type="email"
                        placeholder="exemple@email.com"
                        value={email}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <MdLock className="icon"/>
                    <input
                        type="password"
                        placeholder="******"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={() => {
                        loginHandler();
                    }}
                    disabled={!email || !password}
                >
                    Acessar
                </button>
            </form>

            <Link to="/signup">Criar uma conta</Link>
        </LoginContainer>
    );
}
