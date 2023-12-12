#!/usr/bin/env node


const outputFilePath=process.argv[2]
const inputTxt=process.argv[3]

console.log(outputFilePath)
const QRCode = require('qrcode');
QRCode.toFile(outputFilePath, inputTxt, {
    errorCorrectionLevel: 'H'
  }, function(err) {
    if (err) throw err;
    console.log('QR code saved!');
  });