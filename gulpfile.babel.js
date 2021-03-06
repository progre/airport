import gulp from "gulp";
import gutil from "gulp-util";
import del from "del";
import {mkdir} from "fs";

import {config as copy} from "./gulp/copy";
import {config as jade} from "./gulp/jade";
import "./gulp/selflint";
import {config as stylus} from "./gulp/stylus";
import {config as test} from "./gulp/test";
import {config as ts} from "./gulp/ts";

copy.dest = "www/";
jade.dest = "www/";
stylus.dest = "www/";
test.dest = "www/test/";
ts.main = null;
ts.browser.configPath = "tsconfig.json";
ts.browser.files = [{
    dest: "www/js/",
    src: "src/js/index.ts"
}];

gulp.task("clean", done => {
    del("www/*").then(() => {
        mkdir("www", () => {
            mkdir("www/img", done);
        });
    });
});

gulp.task("build",
    gulp.series(
        "clean",
        gulp.parallel(
            "copy:copy",
            "jade:debug",
            "stylus:stylus",
            gulp.series(
                "ts:debug",
                "test:test"
            )
        )
    )
);

gulp.task("release-build",
    gulp.series(
        "clean",
        gulp.parallel(
            "copy:copy",
            "jade:release",
            "stylus:stylus",
            gulp.series(
                "ts:release",
                "test:test"
            )
        )
    )
);

gulp.task("watch", () => {
    let signal = false;

    gulp.watch(
        ["src/**/*", "!**/tsconfig.json", "!**/*.*(jade|styl|ts|tsx)"],
        gulp.series(begin, "copy:copy", end));
    gulp.watch(
        ["src/**/*.ts*", "!src/test/**"],
        gulp.series(begin, "ts:debug", "test:test", end));
    gulp.watch("src/**/*.jade", gulp.series(begin, "jade:debug", end));
    gulp.watch("src/**/*.styl", gulp.series(begin, "stylus:stylus", end));
    gulp.watch("src/test/**/*.ts", gulp.series(begin, "test:test", end));

    function begin(callback) {
        if (signal) {
            callback(new gutil.PluginError("begin", "Already started."));
            return;
        }
        signal = true;
        setTimeout(() => {
            signal = false;
        }, 3 * 1000);
        console.log("✂─────────────────────────────────────────────────…………");
        callback();
    }

    function end(callback) {
        console.log("   __       __");
        console.log("   ) \\     / (      .-.    .---.  .---. .-.   .-.");
        console.log("  )_  \\_V_/  _(     | |   /   __}{_   _}|  `.'  |");
        console.log("    )__   __(       | `--.\\  {_ }  | |  | |\\ /| |");
        console.log("       `-'          `----' `---'   `-'  `-' ` `-'");
        callback();
    }
});

gulp.task("default",
    gulp.series(
        gulp.parallel(
            "selflint:selflint",
            "build"
        ),
        "watch"
    )
);
