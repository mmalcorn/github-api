var Git = require('./../js/github.js').gitModule;

$(document).ready(function(){
  var gitSearch = new Git();
  $('#git-hub-repo').submit(function(event) {
    event.preventDefault();
    var username = $('#username').val();
    alert(username);
    gitSearch.getRepos(username);
  });
});
