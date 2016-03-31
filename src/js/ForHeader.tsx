import * as React from "react";

export default ForHeader;
class ForHeader extends React.Component<ForHeader.Props, void> {
    render() {
        return <header>
            <hr className="header-top" style={{ height: 6 }}/>
            <div style={{ position: "relative" }}>
                <h1 style={{
                    borderTop: "thin solid white",
                    textAlign: "center",
                    paddingTop: this.props.baseSize * 0.75 + "em",
                    fontSize: this.props.baseSize * 2 + "em",
                    lineHeight: this.props.baseSize + "em"
                }}>
                    新千歳空港
                    <small style={{ paddingLeft: "0.5em" }}>行</small>
                </h1>
                <RollingStockType baseSize={this.props.baseSize}/>
                <Clock baseSize={this.props.baseSize}/>
            </div>
            <hr className="header-bottom" style={{ height: 3 }}/>
        </header>;
    }
}
namespace ForHeader {
    export interface Props {
        baseSize: number;
    }
}

class RollingStockType extends React.Component<RollingStockType.Props, void> {
    render() {
        return <div className="rolling-stock-type" style={{
            position: "absolute",
            top: 0,
            margin: "0 0.25em",
            padding: "0 0.5em",
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            fontSize: this.props.baseSize + "em",
            fontWeight: "bold",
            color: "white"
        }}>快速</div>;
    }
}
namespace RollingStockType {
    export interface Props {
        baseSize: number;
    }
}

class Clock extends React.Component<Clock.Props, void> {
    render() {
        return <div style={{
            position: "absolute",
            bottom: 0,
            right: this.props.baseSize * 0.25 + "em",
            lineHeight: this.props.baseSize + "em",
            fontSize: this.props.baseSize * 1.25 + "em",
            fontWeight: "bold"
        }}>
            {"12:00"}
        </div>;
    }
}
namespace Clock {
    export interface Props {
        baseSize: number;
    }
}