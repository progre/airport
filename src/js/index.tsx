/// <reference path="../../typings/main.d.ts"/>
import * as React from "react";
import * as ReactDOM from "react-dom";
import ForHeader from "./forheader";
import Map from "./map";

const BASE_SIZE = 1;

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
            <ForHeader baseSize={BASE_SIZE}/>
            <Map baseSize={BASE_SIZE} stopovers={stopovers}/>
        </div>;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root/>,
        document.getElementsByTagName("main")[0]
    );
});

/* メモ
1ターン3秒 ヘッダーが1ターン刻み
next フェーズ
    header 
        次は 駅名
        next Station-Name
        つぎは えきめい
    body
        運行情報 / Train information ja/en 4*2=8 (ループ回数は不定。2回、3回もあり)
        路線図 16
            広域 4
            狭域 現在位置から映りきるまで 8駅 4
            広域 en 4
            狭域 en 4
        (防犯カメラ作動中)
        乗り換え案内(あれば) 4
        駅構内案内(近くなったら) 4
        特別警戒　ja/en 4*2 or 運行情報 8
        優先席/携帯電話 2*2 = 4
        頭にもどる

Arriving at フェーズ
    header
        まもなく 駅名
        Arriving at Station-Name
    body
        ドア 4 
        校内案内 4 駅の次は駅にとまります(enなし)

Now Stopping at フェーズ
    header
        ただいま 駅名
        Now Stopping at Station-Name
    body
        路線図 8
            広域 2
            狭域 2
            広域 en 2
            狭域 en 2

For フェーズ
    header
        終着行
        for hogehoge
    body
        広域 2
        狭域 2?

*/
