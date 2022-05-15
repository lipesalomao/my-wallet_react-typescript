import React, { useContext, useEffect, useState } from "react";
import { HeaderContainer } from "./styles";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

interface IHeaderProps {
    toggleTheme: () => void;
}

export function Header(props: IHeaderProps) {
    useEffect(() => {
        setUserData(JSON.parse(sessionStorage.getItem("token")?? "")[0]);
    }, []);

    const [userData, setUserData] = useState<any>({})
    const { colors, title } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <div>
                <span>Ligth</span>
                <Switch
                    onChange={props.toggleTheme}
                    checked={title === "dark"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={50}
                    handleDiameter={25}
                    offColor={colors.accent}
                    onColor={colors.warn}
                    offHandleColor='#c0c0c0'
                />
                <span>Dark</span>
            </div>
            <div>
                <h2>Olá,</h2>
                <span>{userData ? userData.name : ''}</span>
            </div>
        </HeaderContainer>
    );
}
