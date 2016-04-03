import * as React from "react";
import {IntermediateStation} from "../../intermediatestation";
import ForHeader from "../part/forheader";
import Map from "../part/map";

export default function ForScene(
    props: {
        baseSize: number,
        stopovers: IntermediateStation[]
    }
) {
    return <div>
        <ForHeader baseSize={props.baseSize}/>
        <Map baseSize={props.baseSize} stopovers={props.stopovers}/>
    </div>;
}
