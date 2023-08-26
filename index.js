#!/usr/bin/env node

import chalk from "chalk";

const str = process.argv[2] || "",
	foreColor = process.argv[3],
	backColor = process.argv[4];

let clcolor = chalk;
if (backColor) clcolor = clcolor.bgHex(backColor);
if (foreColor) clcolor = clcolor.hex(foreColor);

console.log(clcolor.bold(str));
