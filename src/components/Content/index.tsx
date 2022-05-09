import { ContentContainer } from "./styles";


export function Content(props: any){
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    );
}