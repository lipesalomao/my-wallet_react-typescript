import { DefaultTheme, ThemeProvider } from "styled-components";
import { LoginComponent } from "../../components/LoginComponent";
import { usePersistedTheme } from "../../hooks/usePersistedTheme";
import dark from "../../styles/themes/dark";
import { SignUpContainer } from "./styles";

export function SignUp() {
    const [theme, setTheme] = usePersistedTheme<DefaultTheme>("theme", dark);
    return (
        <ThemeProvider theme={theme}>

        <SignUpContainer>
            <LoginComponent type="signup"/>
        </SignUpContainer>
        </ThemeProvider>
    )
}