chrome.tabs.onUpdated.addListener(
  function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
      chrome.tabs.sendMessage( tabId, {
        message: 'updated',
        url: changeInfo.url
      })
    }
  }
);
chrome.tabs.onload.addListener(
  function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
      chrome.tabs.sendMessage( tabId, {
        message: 'updated',
        url: changeInfo.url
      })
    }
  }
);