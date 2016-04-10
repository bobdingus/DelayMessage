alert("test worked");

function xhr(url,fields,){
	var xhr =  new XMLHttpRequest();
	xhr.open("PUT", url, false);
	//xhr.setRequestHeader("Content-Type", "application/json");
	//xhr.setRequestHeader("Accept", "application/json");
 
	//var postCommand = JSON.stringify(fields);
	xhr.send(postCommand);
	if(xhr.responseText !== ""){
		alert("Error updating");
		prompt("Copy to clipboard: Ctrl+C, Enter", xhr.responseText);
	}
		
}