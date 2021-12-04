import { Injectable } from '@nestjs/common';
import { join } from 'path';
const fs = require('fs');
// file 인코딩 체크
const chardet = require('chardet');
const csv = require('csvtojson');
const iconv = require('iconv-lite');

@Injectable()
export class CsvService {

  async getCsv() {
    const filePath = join(__dirname, 'bus_2019.csv');
    const encoding = await chardet.detectFile(filePath);
    let csvData = fs.readFileSync(filePath);

    if (encoding !== 'UTF-8') {
      csvData = iconv.decode(csvData, encoding);
    }
    const result = await csv({ output: 'json' }).fromString(csvData);

    return result;
  }

}
