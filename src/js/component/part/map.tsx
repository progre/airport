import * as React from "react";
import {IntermediateStation} from "../../intermediatestation";

export default function Map(
    props: {
        baseSize: number;
        stopovers: IntermediateStation[];
    }
) {
    let stopovers = props.stopovers;
    return <div>
        <Stopovers
            baseSize={props.baseSize}
            stopovers={
                stopovers.slice(stopovers.length - 10, stopovers.length) }
            previous={true}
            next={false}/>
        <Stopovers
            baseSize={props.baseSize}
            stopovers={
                stopovers.slice(stopovers.length - 15, stopovers.length - 10) }
            previous={false}
            next={true}/>
    </div>;
}

function Stopovers(
    props: {
        baseSize: number;
        stopovers: IntermediateStation[];
        next: boolean;
        previous: boolean;
    }
) {
    const MAX = 10;
    let spaces = MAX - props.stopovers.length;
    return <div style={{ position: "relative" }}>
        <div style={{
            display: "table",
            margin: "0 auto"
        }}>
            <ul style={{
                listStyle: "none",
                display: "flex",
                marginLeft: spaces * props.baseSize * 3 + "em"
            }}>
                {
                    props.stopovers.map(x => <li key={x.stationNumber}>
                        <Stopover
                            baseSize={props.baseSize}
                            station={x}/>
                    </li>)
                }
            </ul>
        </div>
        <div style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: props.baseSize * 1.5 + "em",
            zIndex: -1
        }}>
            <hr className="stopovers-line" style={{
                position: "absolute",
                left: (props.previous ? 1.25 : 1) * props.baseSize + "em",
                right: props.next ? 0 : props.baseSize + "em",
                height: "inherit",
                borderRadius: 4
            }}/>
            <img src="img/lrbegin.svg" style={{
                position: "absolute",
                top: 12 * props.baseSize - 16,
                left: props.previous ? props.baseSize * 1 + "em" : 0,
                transform: `scale(${props.baseSize})`,
                display: props.previous ? "initial" : "none"
            }}/>
            <img src="img/lrend.svg" style={{
                position: "absolute",
                top: -4,
                right: 0,
                display: props.next ? "initial" : "none"
            }}/>
        </div>
        <span style={{
            position: "absolute",
            right: props.baseSize * 2.5 + "em",
            bottom: 2,
            fontSize: props.baseSize * 0.75 + "em",
            color: "white"
        }}>
            分
        </span>
    </div>;
}

function Stopover(
    props: {
        baseSize: number;
        station: IntermediateStation;
    }
) {
    let nameArray: (string | JSX.Element)[] = props.station.ja.split("\n");
    for (let i = nameArray.length - 1; i >= 1; i--) {
        nameArray.splice(i, 0, <br/>);
    }
    return <div style={{
        fontSize: props.baseSize + "em",
        width: "3em"
    }}>
        <div className="name" style={{
            height: "6em",
            position: "relative",
            width: "100%"
        }}>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                display: "inline",
                transform: "translate(-50%, -50%)",
                height: "inherit",
                textAlign: "right",
                lineHeight: "1em",
                padding: "0.125em"
            }}>
                {nameArray}
            </div>
        </div>
        <div style={{
            textAlign: "center",
            lineHeight: "1em",
            margin: "0.25em auto",
            width: "1.5em",
            backgroundColor: "white",
            fontWeight: "bold"
        }}>
            {props.station.minutes}
        </div>
    </div>;
}
