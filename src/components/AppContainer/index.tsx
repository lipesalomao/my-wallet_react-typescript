import { ThemeProvider, DefaultTheme } from "styled-components";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { Content } from "../Content";
import { Header } from "../Header";
import { SideNav } from "../Sidenav";
import { ContentContainer } from "./styles";
import { usePersistedTheme } from "../../hooks/usePersistedTheme";

export function AppContainer(props: any) {
    const [theme, setTheme] = usePersistedTheme<DefaultTheme>("theme", dark);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <ContentContainer>
                <SideNav />
                <div className="contentColumn">
                    <Header toggleTheme={toggleTheme} />
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </ContentContainer>
        </ThemeProvider>
    );
}
