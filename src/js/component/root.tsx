import * as React from "react";
import ForScene from "./scene/forscene";
import {IntermediateStation} from "../intermediatestation";

const BASE_SIZE = 1;

export default class Root extends React.Component<{ stopovers: IntermediateStation[] }, {}> {
    render() {
        return <ForScene baseSize={BASE_SIZE} stopovers={this.props.stopovers}/>;
    }
}
