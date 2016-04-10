"use strict";
class MainPanel{
	constructor(){
		var hook = document.getElementById("hook");
		this.table = document.createElement("table");
		hook.appendChild(this.table);
		this.rows = 4;
		this.cols = 4;
		for(var i = 0 ; i < this.rows; i++){
			var row = this.table.insertRow(0);
			for(var j = 0 ; j < this.cols; j++){
				new MessageField(row);
			}
		}
		
	}
}