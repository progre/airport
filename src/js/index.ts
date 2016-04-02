/// <reference path="../../typings/main.d.ts"/>
import * as React from "react";
import * as ReactDOM from "react-dom";
import Root from "./component/root";

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        React.createElement(Root),
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
