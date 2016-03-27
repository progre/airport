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
                    paddingTop: "0.75em",
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

class Root extends React.Component<void, void> {
    render() {
        return <main>
            <Header/>
            <ul style={{ listStyle: "none", display: "flex" }}>
                <li>
                    <div className="name">札幌</div>
                    <div className="minutes">10</div>
                </li>
                <li>
                    <div className="name">新千歳空港</div>
                    <div className="minutes">10</div>
                </li>
            </ul>
        </main>;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root/>,
        document.getElementsByTagName("main")[0]
    );
});
