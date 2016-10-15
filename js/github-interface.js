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
