"use strict";
class MessageField{
	constructor(row){
		this.delayMins = delayMins;
		this.cell = row.insertCell(0);
		this.div = document.createElement('div');
		
		this.messageBox = document.createElement('TEXTAREA');
		this.messageBox.className = "message-box";
		this.messageBox.value = "Poker Jargon..";
		this.sendButton = document.createElement('button');
		this.sendButton.innerHTML = "Send";
		this.sendButton.className = "send-button";
		this.div.appendChild(this.messageBox);
		this.div.appendChild(document.createElement('br'));
		this.div.appendChild(this.sendButton);
		this.cell.appendChild(this.div);
		this.timeClicked = new Date();
		
		var t = this;
		(function(){
			t.sendButton.addEventListener("click",function(){
				t.timeClicked = new Date();
				setTimeout(function(){t.sendMessage(t)},t.delayMins * 60000)
			});
		})();
		
		
	}
	
	sendMessage(t){
		
		var output = document.getElementById("outputbox");
		var d = new Date();
		d.setTime( d.getTime() - new Date().getTimezoneOffset()*60*1000 );
		output.innerHTML = output.innerHTML + t.messageBox.value + " Sent [" + d.toISOString() + "] " + " \n";
		output.scrollTop = output.scrollHeight;
		
		var xhr =  new XMLHttpRequest();
		
		xhr.open("POST", "updateDatabase.php", false);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		//xhr.setRequestHeader("Content-Type", "application/json");
		//xhr.setRequestHeader("Accept", "application/json");
		
		var msgStr = "Message="+ t.messageBox.value
		var tcStr = "TimeClicked="+dateToMysqlFormat(t.timeClicked);
		var tsStr = "TimeSent="+dateToMysqlFormat(new Date());
		var postCommand = msgStr + "&" + tcStr + "&" + tsStr;
		xhr.send(postCommand);
		//if(xhr.responseText !== ""){
		//	alert("Error updating");
		//	prompt("Copy to clipboard: Ctrl+C, Enter", xhr.responseText);
		//}
		
	}  
}