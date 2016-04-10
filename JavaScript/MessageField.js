"use strict";
class MessageField{
	constructor(row){
		this.delayMins = 0.1;
		this.cell = row.insertCell(0);
		this.div = document.createElement('div');
		
		this.messageBox = document.createElement('TEXTAREA');
		this.messageBox.className = "message-box";
		this.sendButton = document.createElement('button');
		this.sendButton.innerHTML = "Send";
		this.sendButton.className = "send-button";
		this.div.appendChild(this.messageBox);
		this.div.appendChild(document.createElement('br'));
		this.div.appendChild(this.sendButton);
		this.cell.appendChild(this.div);
		
		var t = this;
		(function(){
			t.sendButton.addEventListener("click",function(){
				setTimeout(t.sendMessage,t.delayMins * 60000)
			});
		})();
		
		
	}
	
	sendMessage(){
		alert(this.messageBox.value);
	}
}