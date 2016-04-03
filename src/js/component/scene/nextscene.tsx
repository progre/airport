import * as React from "react";
import ForHeader from "../part/forheader";
import Map from "../part/map";

export default function nextScene(props: { baseSize: number, stopovers: any }) {
    return <div>
        <ForHeader baseSize={props.baseSize}/>
        <Map baseSize={props.baseSize} stopovers={props.stopovers}/>
    </div>;
}
