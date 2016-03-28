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
        let stopovers = [
            { stationNumber: "01", name: "札 幌", en: "Sapporo", minutes: "0" },
            { stationNumber: "H02", name: "苗 穂", en: "Naebo", minutes: "-" },
            { stationNumber: "H03", name: "白 石", en: "Shiroishi", minutes: "-" },
            { stationNumber: "H04", name: "平 和", en: "Heiwa", minutes: "-" },
            { stationNumber: "H05", name: "新札幌", en: "Shin-Sapporo", minutes: "9" },
            { stationNumber: "H06", name: "上野幌", en: "Kami-Nopporo", minutes: "-" },
            { stationNumber: "H07", name: "北広島", en: "Kitahiroshima", minutes: "17" },
            { stationNumber: "H08", name: "島 松", en: "Shimamatsu", minutes: "-" },
            { stationNumber: "H09", name: "恵み野", en: "Megumino", minutes: "-" },
            { stationNumber: "H10", name: "恵 庭", en: "Eniwa", minutes: "24" },
            { stationNumber: "H11", name: "サッポロビール庭園", en: "Sapporo Beer Teien", minutes: "-" },
            { stationNumber: "H12", name: "長 都", en: "Osatsu", minutes: "-" },
            { stationNumber: "H13", name: "千 歳", en: "Chitose", minutes: "30" },
            { stationNumber: "H14", name: "南千歳", en: "Minami-Chitose", minutes: "34" },
            { stationNumber: "AP15", name: "新千歳空港", en: "New Chitose Airport", minutes: "37" }
        ];
        let stopovers1 = stopovers.slice(0, 8);
        let stopovers2 = stopovers.slice(8);
        return <div>
            <Header/>
            <ul style={{ listStyle: "none", display: "flex" }}>
                {
                    stopovers1.map(x => <li key={x.stationNumber}>
                        <Stopover name={x.name} minutes={x.minutes}/>
                    </li>)
                }
            </ul>
            <ul style={{ listStyle: "none", display: "flex" }}>
                {
                    stopovers2.map(x => <li key={x.stationNumber}>
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
