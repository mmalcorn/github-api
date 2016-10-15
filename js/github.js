var apiKey = require('./../.env').apiKey;

function Git(){
}

Git.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    displayFunction(username, response.main);
    console.log(response);
  }).fail(function(error){
    $('#repos').text(error.responseJSON.message);
  });
}

exports.gitModule = Git;
