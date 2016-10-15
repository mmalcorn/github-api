(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "19f90679f609841158933aed64786a82493d127a";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Git(){
}

Git.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    displayFunction(username, response.repos_url);
    console.log(response);
  }).fail(function(error){
    $('#repos').text(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
  });
}

exports.gitModule = Git;

},{"./../.env":1}],3:[function(require,module,exports){
var Git = require('./../js/github.js').gitModule;

var displayGitUserInfo = function(username, userData) {
  $('#repos').text("Here are " + username +"'s repositories " + userData);
};

$(document).ready(function(){
  var gitSearch = new Git();
  $('#userNameButton').click(function() {
    var username = $('#username').val();
    alert(username);
    gitSearch.getRepos(username, displayGitUserInfo);
  });
});

},{"./../js/github.js":2}]},{},[3]);
