"use strict";
const { bundleDemo, cleanDemo, watchDemo } = require("gulptask-demo-page").generateTasks({
    style: `canvas{background-color:#000}`,
    compileTarget:"es6"
});

exports.bundleDemo = bundleDemo;
exports.cleanDemo = cleanDemo;
exports.watchDemo = watchDemo;