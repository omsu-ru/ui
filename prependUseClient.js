const fs = require("fs");
const path = require("path");

const prependText = "'use client'\n";

// Function to prepend text to a file
function prependToFile(filePath) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.error(err);
    }
    const result = prependText + data;

    fs.writeFile(filePath, result, "utf8", function (err) {
      if (err) return console.error(err);
    });
  });
}

// Use the function to prepend text to both index.js and index.mjs
prependToFile(path.join(__dirname, "lib/index.js"));
prependToFile(path.join(__dirname, "lib/index.mjs"));
