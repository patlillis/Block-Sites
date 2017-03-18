// Main storage for extension stuff.
var redirect = {};

// var sitesListUrl = 'https://api.github.com/users/patlillis/gists';
var blockedDomains = [
  "reddit.com"
];

function block(request) {
  var uri = redirect.URI.set(request.url);
  var domain = redirect.URI.domainFromHostname(uri.hostname);
  if (blockedDomains.indexOf(domain) !== -1) {
    return { "cancel": true };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  block,
  { urls: ["<all_urls>"] },
  ["blocking"]
);