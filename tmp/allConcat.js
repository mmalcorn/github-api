var Git = require('./../js/github.js').gitModule;

var displayGitUserInfo = function(username) {
  $('#repo-message').text("Here are " + username +"'s repositories: ");
};

$(document).ready(function(){
  var gitSearch = new Git();
  $('#userNameButton').click(function() {
    var username = $('#username').val();
    gitSearch.getRepos(username, displayGitUserInfo);
  });
});
