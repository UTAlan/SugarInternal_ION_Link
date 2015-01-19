chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
    if (response.acct_id) {
      document.getElementById("iframe").src = "http://ionapi.sugarcrm.com/display.php?arid=" + response.acct_id;
    }
  });
});