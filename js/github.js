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
