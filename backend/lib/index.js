"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "frontend", "build")));
app.get("*", function (_, res) {
    res.sendFile(path_1.default.join(__dirname, "..", "frontend", "build", "index.html"));
});
app.listen(process.env.PORT, function () {
    console.log("Server is running on port ".concat(process.env.PORT));
});
