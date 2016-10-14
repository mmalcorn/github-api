(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey =  "5dacd42a7ba91d48fffdac68de0159b023faca5e";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Git = function(){
}

Git.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/token=5dacd42a7ba91d48fffdac68de0159b023faca5e' + username + '&apiKey=' + apiKey).then(function(response){
    displayFunction(username, response.main);
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.gitModule = Git;

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env');
var Git = require('./../js/github.js').gitModule; //TODO: VARIABLE NAME 'GIT' IS THE CLASS NAME.  MIGHT RENAME CLASS LATER.  IS .gitModule correct?

$(document).ready(function(){
  $('#git-hub-repo').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    $('#git-hub-repo').hide();
    $('#repos').prepend('<p>Repositories for ' + username);
  });
});

},{"./../.env":1,"./../js/github.js":2}]},{},[3]);
