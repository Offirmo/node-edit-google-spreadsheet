var Spreadsheet = require('../');
var creds = require('./cred-loader');

Spreadsheet.load({
  debug: true,
  oauth2: require('./cred-loader'),
  spreadsheetName: 'node-edit-spreadsheet',
  worksheetName: 'Sheet1',
}, function run(err, spreadsheet) {
  if(err) throw err;
  //receive all cells
  spreadsheet.receive({getValues:false},function(err, rows, info) {
    if(err) throw err;
    console.log("Found rows:", rows);
    console.log("With info:", info);
  });
});

