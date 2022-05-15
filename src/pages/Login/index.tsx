
import { DefaultTheme, ThemeProvider } from "styled-components"
import { LoginComponent } from "../../components/LoginComponent"
import { usePersistedTheme } from "../../hooks/usePersistedTheme";
import dark from "../../styles/themes/dark";
import { LoginContainer } from "./styles"

export function Login(props: any) {
    const [theme, setTheme] = usePersistedTheme<DefaultTheme>("theme", dark);
    return (
        <ThemeProvider theme={theme}>

            <LoginContainer> 
                <LoginComponent type="login"/>
            </LoginContainer>
        </ThemeProvider>
        )
}
