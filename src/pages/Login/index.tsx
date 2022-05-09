
import { LoginComponent } from "../../components/LoginComponent"
import { LoginContainer } from "./styles"

export function Login(props: any) {
    return (
        <LoginContainer>
            <h1>LOGIN</h1>
            <LoginComponent/>
        </LoginContainer>
    )
}