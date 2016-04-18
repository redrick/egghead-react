import axios from 'axios'

const base_url = 'https://api.github.com/users/'

function getRepos(username) {
  return axios.get(base_url + username + '/repos')
};

function getUserInfo(username) {
  return axios.get(base_url + username)
};

var helpers = {
  getGithubInfo: function(username){
    return axios.all([getRepos(username), getUserInfo(username)])
      .then(function(arr){
        console.log(data);
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      })
  }
}

module.exports = helpers;
