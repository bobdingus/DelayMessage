
function xhr(url,fields){
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

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

function dateToMysqlFormat(date){
	var ans = date.getUTCFullYear() + 
		"-" + 
		twoDigits(1 + date.getUTCMonth()) + 
		"-" + twoDigits(date.getUTCDate()) + 
		" " + 
		twoDigits(date.getUTCHours()) + 
		":" + twoDigits(date.getUTCMinutes()) + 
		":" + twoDigits(date.getUTCSeconds());
    return ans;
		
};