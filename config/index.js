'use strict';

const fs = require("fs");
const path = require("path");

const files = fs.readdirSync(__dirname);

let config = {};

files.forEach(function(file) {
	let name = path.basename(file, ".js");
	if (name !== "index") { config[name] = require(`./${name}`)(process.env.NODE_ENV); }
});

module.exports = config;