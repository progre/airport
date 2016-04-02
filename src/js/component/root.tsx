import * as React from "react";
import ForScene from "./scene/forscene";

const BASE_SIZE = 1;

export default class Root extends React.Component<{}, {}> {
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
        return <ForScene baseSize={BASE_SIZE} stopovers={stopovers}/>;
    }
}
