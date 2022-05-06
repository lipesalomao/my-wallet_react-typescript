import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            background: string,
            accent: string,
            warn: string,
        },
    
        text: {
            primary: string,
            secondary: string,
        }
    }
}