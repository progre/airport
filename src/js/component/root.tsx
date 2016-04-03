import * as React from "react";
import ForScene from "./scene/forscene";

const BASE_SIZE = 1;

export default class Root extends React.Component<{}, {}> {
    render() {
        return <ForScene baseSize={BASE_SIZE} stopovers={stopovers}/>;
    }
}
