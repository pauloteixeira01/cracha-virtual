(function(doc) {
  'use strict';

  let image = doc.querySelector('[data-js="image"]');
  let userName = doc.querySelector('[data-js="userName"]');
  let profile = doc.querySelector('[data-js="github"]');
  let user = doc.querySelector('[data-js="user"]');
  let bio = doc.querySelector('[data-js="bio"]');
  let links = doc.querySelectorAll('a');
  
  const userNameSocialMedia = {
    github: 'pauloteixeira01',
    youtube: 'channel/UCUlDLLFmgq4p1SWiPrQUvvw',
    instagram: 'paulotx.js',
    facebook: 'pauloteixeiraJS',
    twitter: 'paulotx_js'
  };

  const setLinks = () => {
    links.forEach(link => {
      const social = link.getAttribute('data-js');
      // link.href = `https://${social}.com/${userNameSocialMedia[social]}`;
    });
  }

  setLinks();

  function getGitHubProfileInfo() {
    const url = `https://api.github.com/users/${userNameSocialMedia.github}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        image.src = data.avatar_url;
        userName.textContent = data.name;
        profile.href = data.html_url;
        user.textContent = data.login
        bio.textContent = data.bio;
      })
  }

  getGitHubProfileInfo();

})(document);