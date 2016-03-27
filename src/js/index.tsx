/// <reference path="../../typings/main.d.ts"/>
import * as React from "react";
import * as ReactDOM from "react-dom";

class Header extends React.Component<void, void> {
    render() {
        return <header>
            <hr className="header-top" style={{ height: 8 }}/>
            <div style={{ position: "relative" }}>
                <h1 style={{
                    borderTop: "thin solid white",
                    paddingTop: "1em",
                    lineHeight: "1em",
                    textAlign: "center",
                    fontSize: "3em"
                }}>新千歳空港<small>行</small></h1>
                <RollingStockType/>
                <Clock/>
            </div>
            <hr className="header-bottom" style={{ height: 6 }}/>
        </header>;
    }
}

class RollingStockType extends React.Component<void, void> {
    render() {
        return <div className="rolling-stock-type" style={{
            position: "absolute",
            top: 0,
            margin: "0 0.25em",
            padding: "0 0.5em",
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            fontSize: "1.5em",
            fontWeight: "bold",
            color: "white"
        }}>快速</div>;
    }
}

class Clock extends React.Component<void, void> {
    render() {
        return <div style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            fontSize: "1em",
            fontWeight: "bold"
        }}>
            12: 00
        </div>;
    }
}

class Stopover extends React.Component<Stopover.Props, void> {
    render() {
        return <div style={{ fontSize: "1.5em", width: "1.5em" }}>
            <div className="name" style={{
                height: "10em",
                textAlign: "right"
            }}>{this.props.name}</div>
            <div style={{
                textAlign: "center"
            }}>{this.props.minutes}</div>
        </div>;
    }
}

namespace Stopover {
    export interface Props {
        name: string;
        minutes: string;
    }
}

class Root extends React.Component<void, void> {
    render() {
        let stopovers1 = [
            { stationNumber: "01", name: "札 幌", minutes: "10" },
            { stationNumber: "H02", name: "苗 穂", minutes: "-" },
            { stationNumber: "H03", name: "白 石", minutes: "-" },
            { stationNumber: "H04", name: "平 和", minutes: "-" },
            { stationNumber: "H05", name: "新札幌", minutes: "10" },
            { stationNumber: "H06", name: "上野幌", minutes: "-" },
            { stationNumber: "H07", name: "北広島", minutes: "10" },
        ];
        let stopovers2 = [
            { stationNumber: "H08", name: "島 松", minutes: "-" },
            { stationNumber: "H09", name: "恵み野", minutes: "-" },
            { stationNumber: "H10", name: "恵 庭", minutes: "10" },
            { stationNumber: "H11", name: "サッポロビール庭園", minutes: "-" },
            { stationNumber: "H12", name: "長 都", minutes: "-" },
            { stationNumber: "H13", name: "千 歳", minutes: "10" },
            { stationNumber: "H14", name: "南千歳", minutes: "10" },
            { stationNumber: "AP15", name: "新千歳空港", minutes: "10" }
        ];
        return <div>
            <Header/>
            <ul style={{ listStyle: "none", display: "flex" }}>
                {
                    stopovers1.map(x => <li>
                        <Stopover name={x.name} minutes={x.minutes}/>
                    </li>)
                }
            </ul>
            <ul style={{ listStyle: "none", display: "flex" }}>
                {
                    stopovers2.map(x => <li>
                        <Stopover name={x.name} minutes={x.minutes}/>
                    </li>)
                }
            </ul>
        </div>;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root/>,
        document.getElementsByTagName("main")[0]
    );
});
