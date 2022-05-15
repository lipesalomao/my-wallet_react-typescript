import styled from "styled-components";

export const LoginContainer = styled.div`
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
        height: 300px;
        border-radius: 10px;
        margin: 1.5rem 0 3rem 0;
        background-color: ${(props) => props.theme.colors.secondary};

        .title {
            font-size: 1.5rem;
            color: ${(props) => props.theme.text.primary};
            font-weight: bolder;
        }
        .titleUnderline{
            height: 5px;
            background-color: ${(props) => props.theme.colors.warn};
            width: 2rem;
            margin-bottom: 1rem;
        }

        input {
            border-radius: 5px;
            height: 2rem;
            padding: 0 0.5rem;
        }

        button {
            margin-top: 1rem;
            border-radius: 5px;
            height: 2rem;
            font-weight: bold;
            color: #fff;
            background-color: ${(props) => props.theme.colors.warn};
        }
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.text.primary};
        opacity: 0.5;


        &:hover {
            opacity: 1;
        }
    }
`;
