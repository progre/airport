import * as React from "react";

export default Map;
class Map extends React.Component<Map.Props, void> {
    render() {
        let stopovers = this.props.stopovers;
        return <div>
            <Stopovers
                baseSize={this.props.baseSize}
                stopovers={
                    stopovers.slice(stopovers.length - 10, stopovers.length) }
                previous={true}
                next={false}/>
            <Stopovers
                baseSize={this.props.baseSize}
                stopovers={
                    stopovers.slice(stopovers.length - 15, stopovers.length - 10) }
                previous={false}
                next={true}/>
        </div>;
    }
}
namespace Map {
    export interface Props {
        baseSize: number;
        stopovers: {
            stationNumber: string;
            name: string;
            minutes: string;
        }[];
    }
}

class Stopovers extends React.Component<Stopovers.Props, void> {
    render() {
        const MAX = 10;
        let spaces = MAX - this.props.stopovers.length;
        return <div style={{ position: "relative" }}>
            <div style={{
                display: "table",
                margin: "0 auto"
            }}>
                <ul style={{
                    listStyle: "none",
                    display: "flex",
                    marginLeft: spaces * this.props.baseSize * 3 + "em"
                }}>
                    {
                        this.props.stopovers.map(x => <li key={x.stationNumber}>
                            <Stopover
                                baseSize={this.props.baseSize}
                                name={x.name}
                                minutes={x.minutes}/>
                        </li>)
                    }
                </ul>
            </div>
            <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: this.props.baseSize * 1.5 + "em",
                zIndex: -1
            }}>
                <hr className="stopovers-line" style={{
                    position: "absolute",
                    left: (this.props.previous ? 1.25 : 1) * this.props.baseSize + "em",
                    right: this.props.next ? 0 : this.props.baseSize + "em",
                    height: "inherit",
                    borderRadius: 4
                }}/>
                <img src="img/lrbegin.svg" style={{
                    position: "absolute",
                    top: 12 * this.props.baseSize - 16,
                    left: this.props.previous ? this.props.baseSize * 1 + "em" : 0,
                    transform: `scale(${this.props.baseSize})`,
                    display: this.props.previous ? "initial" : "none"
                }}/>
                <img src="img/lrend.svg" style={{
                    position: "absolute",
                    top: -4,
                    right: 0,
                    display: this.props.next ? "initial" : "none"
                }}/>
            </div>
            <span style={{
                position: "absolute",
                right: this.props.baseSize * 2 + "em",
                bottom: 2,
                fontSize: this.props.baseSize * 0.75 + "em",
                color: "white"
            }}>
                分
            </span>
        </div>;
    }
}
namespace Stopovers {
    export interface Props {
        baseSize: number;
        stopovers: {
            stationNumber: string;
            name: string;
            minutes: string;
        }[];
        next: boolean;
        previous: boolean;
    }
}

class Stopover extends React.Component<Stopover.Props, void> {
    render() {
        let nameArray: (string | JSX.Element)[] = this.props.name.split("\n");
        for (let i = nameArray.length - 1; i >= 1; i--) {
            nameArray.splice(i, 0, <br/>);
        }
        return <div style={{
            fontSize: this.props.baseSize + "em",
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
                {this.props.minutes}
            </div>
        </div>;
    }
}

namespace Stopover {
    export interface Props {
        baseSize: number;
        name: string;
        minutes: string;
    }
}
