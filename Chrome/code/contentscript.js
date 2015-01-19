chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.greeting == "hello") {
  	// Get Account ID
    var tmp = document.querySelectorAll("[data-name=account_name]")[0].getElementsByTagName("a")[0].href.split("/");
    var acct_id = tmp[tmp.length-1];
    
    // If "Filed on Behalf of" is populated, use that ID instead
    tmp = document.querySelectorAll("[data-name=accounts_cases_1_name]")[0].getElementsByTagName("a")[0].href.split("/");
	if(tmp.length > 4) {
	    acct_id = tmp[tmp.length-1];
    }
    
    sendResponse({acct_id: acct_id});
  }
});

chrome.storage.sync.get("noPortalAlert", function(result) {
	/*
	var noPortalAlert = result.noPortalAlert;
	if(!noPortalAlert) {
		noPortalAlert = "Yes";
		chrome.storage.sync.set({"noPortalAlert": "Yes"}, function(){});
	}
	var alertAdded = false;
	if(noPortalAlert == "Yes") {
		if(document.URL.indexOf("Cases") != -1) {
        	interval = setInterval(function() {
        		var tmp = document.querySelectorAll("[data-name=submitter_c]")[0].getElementsByTagName("a")[0].href.split("/");
            	if(tmp.length > 0) {
					clearInterval(interval);
					var portalSubmitter = tmp[tmp.length-1].innerHTML;
					if(!portalSubmitter && !alertAdded) {
						var createNoteButton = window.document.getElementById("History_createnoteorattachment_button");
						var button_oc = createNoteButton.onclick;
						createNoteButton.onclick = function() { 
							if(confirm("This case does not have a Portal Submitter. Are you sure you want to create a Note?")) {
								if(button_oc) { 
									button_oc(); 
								}
							} else {
								return false;
							}
						};
						alertAdded = true;
					}
				}
			}, 3000);
		}
	}
	*/
});
