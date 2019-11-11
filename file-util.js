"use strict";

const path = require('path');
const fs = require('fs');

/**
 * Returns the file extension (lower case).
 * @param {*} filePath 
 */
const getFileExtension = (filePath) => {
    return path.extname(filePath).toLowerCase();
}

/**
 * Checks the file.
 * @param {*} filePath 
 */
const checkFile = (filePath) => {
    const extension = getFileExtension(filePath);
    if (extension !== '.json' && extension !== '.csv') {
        throw new Error('Invalid file extension. Try JSON ou CSV files.');
    }
};

/**
 * Returns true if it is a CSV file.
 * @param {*} filePath 
 */
const isCsv = (filePath) => {
    return getFileExtension(filePath) === '.csv';
};

/**
 * Read the file from the path.
 * @param {*} dataPath 
 */
const readFile = (dataPath) => {
    checkFile(dataPath);
    const content = fs.readFileSync(dataPath, 'utf8');
    if (isCsv(dataPath)) {
        return content;
    }
    return JSON.parse(content);
};

module.exports = {
    readFile,
    isCsv
}