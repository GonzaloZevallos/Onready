const fs = require('fs');
const path = require('path');


class JsonModel {
  constructor(fileName) {
    this.fileName = fileName;
  }

  readFile(){
    return JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/../data/${this.fileName}.json`), 'utf-8'));
  }
  
}

module.exports = JsonModel;