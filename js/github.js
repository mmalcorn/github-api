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
