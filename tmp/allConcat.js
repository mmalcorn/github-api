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
