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
        let nameArray: (string | JSX.Element)[] = this.props.name.split("\n");
        for (let i = nameArray.length - 1; i >= 1; i--) {
            nameArray.splice(i, 0, <br/>);
        }
        return <div style={{
            fontSize: "1.5em",
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
        name: string;
        minutes: string;
    }
}

class Stopovers extends React.Component<Stopovers.Props, void> {
    render() {
        return <div style={{ position: "relative" }}>
            <ul style={{
                listStyle: "none",
                display: "flex",
                margin: "0 2.5em"
            }}>
                {
                    this.props.stopovers.map(x => <li key={x.stationNumber}>
                        <Stopover name={x.name} minutes={x.minutes}/>
                    </li>)
                }
            </ul>
            <hr className="stopovers-line" style={{
                position: "absolute",
                height: "2.25em",
                width: "100%",
                bottom: 0,
                zIndex: -1,
                borderRadius: 4
            }}/>
        </div>;
    }
}

namespace Stopovers {
    export interface Props {
        stopovers: {
            stationNumber: string;
            name: string;
            minutes: string;
        }[];
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
            { stationNumber: "H11", name: "サッポロ\nビール庭園", en: "Sapporo-Beer-Teien", minutes: "-" },
            { stationNumber: "H12", name: "長 都", en: "Osatsu", minutes: "-" },
            { stationNumber: "H13", name: "千 歳", en: "Chitose", minutes: "30" },
            { stationNumber: "H14", name: "南千歳", en: "Minami-Chitose", minutes: "34" },
            { stationNumber: "AP15", name: "新千歳空港", en: "New Chitose Airport", minutes: "37" }
        ];
        return <div>
            <Header/>
            <Stopovers stopovers={stopovers.slice(stopovers.length - 5, stopovers.length) }/>
            <Stopovers stopovers={stopovers.slice(stopovers.length - 10, stopovers.length - 5) }/>
            <Stopovers stopovers={stopovers.slice(stopovers.length - 15, stopovers.length - 10) }/>
        </div>;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root/>,
        document.getElementsByTagName("main")[0]
    );
});
