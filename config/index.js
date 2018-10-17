let dev = require("./dev");
let pro = require("./pro");
let config = process.env.nodePath;
if (config) {
    config = pro;
} else {

    config = dev;
}
module.exports = config;
