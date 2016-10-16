var apiKey = require('./../.env').apiKey;

function Git(){
}

Git.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    displayFunction(username, response.login);
    console.log(response);
  }).fail(function(error){
    $('#repos').text(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(gitApi=0; gitApi < response.length; gitApi++)
    $("#repos").append("<li>" + response[gitApi].name + "</li>" + "<p id='description'>" + response[gitApi].description) + "</p>" + "<br>"
  });
}

exports.gitModule = Git;
