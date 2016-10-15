var apiKey = require('./../.env').apiKey;

function Git(){
}

Git.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    $('#repos').text(error.responseJSON.message);
  });
}

exports.gitModule = Git;
