"use strict";
class OutBoundMessages{
	constructor(){
		var hook = document.getElementById("hook");
		this.box = document.createElement("TEXTAREA");
		this.box.id = "outputbox";
		this.box.className = "outbound-message-box"
		hook.appendChild(this.box);
		
		
	}
}