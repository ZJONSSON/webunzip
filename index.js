#! /usr/bin/env node

var unzipper = require('unzipper');
var argv = require('minimist')(process.argv.slice(2));
var request = require('request');
var inquirer = require('inquirer');
var fstream = require('fstream');
var path = require('path');
var Promise = require('bluebird');
var Stream = require('stream');

var Multiprogress = require("multi-progress");
var multi = new Multiprogress(process.stderr);

// http://stackoverflow.com/a/20732091/1760354
function humanFileSize(size) {
  var i = Math.floor( Math.log(size) / Math.log(1024) );
  return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}

unzipper.Open.url(request,{url: argv._[0]})
  .then(d => inquirer.prompt([{
      type: 'checkbox',
      message: 'Select files to unzip',
      name: 'files',
      choices: d.files.map(function(d,i) {
        return {name:[' ',d.path,humanFileSize(d.uncompressedSize)].join(' '),value:d};
      })
    }
  ])
  .then(d => {
    d.files.forEach(function(file) {
      file.bar = multi.newBar('[:bar] :percent :etas '+file.path.slice(0,40), {
        complete: '=',
        incomplete: ' ',
        width: 30,
        total: file.uncompressedSize
      });
    });

    return Promise.map(d.files,function(file) {
      return new Promise(function(resolve,reject) {
        file.stream()
          .pipe(Stream.Transform({
            transform: function(d,e,cb) {
              file.bar.tick(d.length);
              this.push(d);
              cb();
            }
          }))
          .pipe(fstream.Writer({path:file.path}))
          .on('finish',resolve)
          .on('error',reject);
      });
    });
  }));