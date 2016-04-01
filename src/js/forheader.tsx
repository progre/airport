import * as React from "react";

export default function ForHeader(props: { baseSize: number }) {
    return <header>
        <hr className="header-top" style={{ height: 6 }}/>
        <div style={{ position: "relative" }}>
            <h1 style={{
                borderTop: "thin solid white",
                textAlign: "center",
                paddingTop: props.baseSize * 0.75 + "em",
                fontSize: props.baseSize * 2 + "em",
                lineHeight: props.baseSize + "em"
            }}>
                新千歳空港
                <small style={{ paddingLeft: "0.5em" }}>行</small>
            </h1>
            <RollingStockType baseSize={props.baseSize}/>
            <Clock baseSize={props.baseSize}/>
        </div>
        <hr className="header-bottom" style={{ height: 3 }}/>
    </header>;
}

function RollingStockType(props: { baseSize: number }) {
    return <div className="rolling-stock-type" style={{
        position: "absolute",
        top: 0,
        margin: "0 0.25em",
        padding: "0 0.5em",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        fontSize: props.baseSize + "em",
        fontWeight: "bold",
        color: "white"
    }}>快速</div>;
}

function Clock(props: { baseSize: number }) {
    return <div style={{
        position: "absolute",
        bottom: 0,
        right: props.baseSize * 0.25 + "em",
        lineHeight: props.baseSize + "em",
        fontSize: props.baseSize * 1.25 + "em",
        fontWeight: "bold"
    }}>
        {"12:00"}
    </div>;
}
