// Saves options to localStorage.
function save_options() {
	var select = document.getElementById("noPortalAlert");
	var noPortalAlert = select.children[select.selectedIndex].value;
	chrome.storage.sync.set({'noPortalAlert': noPortalAlert}, function() {
		// Update status to let user know options were saved.
		var status = document.getElementById("status");
		status.innerHTML = "<p>Options Saved.</p>";
		setTimeout(function() {
			status.innerHTML = "";
		}, 750);
	});
}

// Restores select box state to saved value from localStorage.
function restore_options() {
	chrome.storage.sync.get('noPortalAlert', function(result) {
		var noPortalAlert = result.noPortalAlert;
		if (!noPortalAlert) {
			chrome.storage.sync.set({'noPortalAlert': 'Yes'}, function() {
				restore_options();
				return;
			});
		}
		var select = document.getElementById("noPortalAlert");
		for (var i = 0; i < select.children.length; i++) {
			var child = select.children[i];
			if (child.value == noPortalAlert) {
				child.selected = "true";
				break;
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
