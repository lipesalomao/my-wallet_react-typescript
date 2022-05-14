import { RowContainer } from "./styles";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export function Row(props: any) {
    useEffect(() => {
        setValue(props.value);
    }, []);

    const [value, setValue] = useState<number>(0);

    return (
        <RowContainer
            frequency={props.frequency}
            onClick={(e) => {
                window.location.href = `/new/${props.id}`;
            }}
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
            <CountUp
                className="account-balance"
                start={0}
                end={value}
                duration={0.5}
                separator="."
                decimals={2}
                decimal=","
                prefix="R$ "
            >
                {({ countUpRef }) => (
                    <div className="rowValue">
                        <span ref={countUpRef} />
                    </div>
                )}
            </CountUp>
        </RowContainer>
    );
}