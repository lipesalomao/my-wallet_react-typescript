import styled from "styled-components";

type ContainerProps = {
    type: "signup" | "login";
};

export const LoginContainer = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .formContainer {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        padding: 2rem;
        gap: 1rem;
        width: 300px;
        height: ${(props) => (props.type === "signup" ? "370px" : "300px")};
        border-radius: 10px;
        margin: 1.5rem 0 3rem 0;
        background-color: ${(props) => props.theme.colors.secondary};
        

        div{
            width: 100%;
            height: 2rem;
            margin: 0;
            padding: 0;
        }
        
        .title {
            font-size: 2rem;
            color: ${(props) => props.theme.text.primary};
            font-weight: bolder;
        }
        .titleUnderline {
            height: 5px;
            background-color: ${(props) => props.theme.colors.warn};
            width: 3rem;
            margin-bottom: 1rem;
        }

        input {
            width: 100%;
            border-radius: 5px;
            height: 2rem;
            padding: 5px 0.5rem 0 2rem;
            border: 1px solid #c6c6c6
        }

        button {
            margin-top: 2rem;
            border-radius: 5px;
            height: 2rem;
            font-weight: bold;
            color: #fff;
            background-color: ${(props) => props.theme.colors.warn};
        }
        .icon {
            position: relative;
            top: 32px;
            left: 5px;
            font-size: 1.5rem;
            color: #313862;
        }
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.text.primary};
        opacity: 0.5;
        font-size: 0.8rem;

        &:hover {
            opacity: 1;
        }
    }
`;
