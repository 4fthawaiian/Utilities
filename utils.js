// utils.js - a little class of utility functions for work stuff

var contegix = {
MessageBar: function() {
	var a = function (a, b) {
		for (var c in b) {
			a.style[c] = b[c];
		}
		return a;
	};
	var b = a(document.createElement("div"), { top: 0, left: 0, position: "fixed", background: "orange", width: "100%", padding: "10px", textAlign: "center" });
	b.setAttribute('id', "alertMessage");
	document.body.appendChild(b);
	this.setMessage = function (a) { while (b.firstChild) { b.removeChild(b.firstChild) } b.appendChild(document.createTextNode(a)); };
	this.toggleVisibility = function () { b.style.display = b.style.display === "none" ? "block" : "none"; };
}
};
var MessageBar = contegix.MessageBar;

