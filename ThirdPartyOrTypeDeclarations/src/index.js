"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// There are a set of TypeScript declaration files that ship with Axios in the node_modules
axios_1["default"]
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    console.log("woooo");
    console.log(res.data);
})["catch"](function (e) {
    console.log(e);
});
