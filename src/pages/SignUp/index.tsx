import { LoginComponent } from "../../components/LoginComponent";
import { SignUpComponent } from "../../components/SingUpComponent";
import { SignUpContainer } from "./styles";

export function SignUp() {
    return (
        <SignUpContainer>
            <LoginComponent type="signup"/>
        </SignUpContainer>
    )
}