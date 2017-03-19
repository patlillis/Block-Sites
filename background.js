// Work in firefox or chrome.
var browser = window.browser || chrome;

var blockedDomains = [
  "reddit.com"
];

function block(request) {
  var domain = getDomain(request.url);
  console.log(domain);
  if (blockedDomains.indexOf(domain) !== -1) {
    return { "cancel": true };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  block,
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// Get domain from url.
function getDomain(url) {
  var url = new URL(url);
  var hostname = url.hostname;
  var hostnameParts = hostname.split('.');

  return hostnameParts
          .slice(hostnameParts.length - 2, hostnameParts.length)
          .join('.');
}