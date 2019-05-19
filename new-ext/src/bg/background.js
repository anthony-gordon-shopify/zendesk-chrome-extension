// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  chrome.pageAction.show(sender.tab.id);
  sendResponse();
});

chrome.cookies.set({
  url: "https://shopify.zendesk.com/*",
  name: "CookieVar",
  value: "123",
  expirationDate: new Date().getTime() / 1000 + 3600
});

console.log("background");
