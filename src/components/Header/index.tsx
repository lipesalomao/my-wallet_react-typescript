import React, { useContext, useEffect, useState } from "react";
import { HeaderContainer } from "./styles";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { AuthContext } from "../../contexts/Auth/AuthContext";

interface IHeaderProps {
    toggleTheme: () => void;
}

export function Header(props: IHeaderProps) {
    const auth = useContext(AuthContext);
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
                <span>{auth.user![0].name?? ''}</span>
            </div>
        </HeaderContainer>
    );
}
