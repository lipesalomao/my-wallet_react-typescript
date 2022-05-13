import { RowContainer } from "./styles";

export function Row(props: any) {


    return (
        <RowContainer
            frequency={props.frequency}
            onClick={(e) => { window.location.href = `/new/${props.id}`} }
        >
            <div className="rowContentContainer">
                <div className="colorType"></div>
                <div className="rowTextContainer">
                    <span className="rowTitle">{props.title}</span>
                    <span className="rowType">
                        {props.type} {props.frequency}
                    </span>
                </div>
            </div>
            <span className="rowValue">
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(props.value)}
            </span>
        </RowContainer>
    );
}
