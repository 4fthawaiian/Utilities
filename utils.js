// just testing
function MessageBar() {
	var a = function (a, b) {
		for (var c in b) {
			a.style[c] = b[c];
		}
		return a
	},
		b = a(document.createElement("div"), {
			top: 0,
			left: 0,
			position: "fixed",
			background: "orange",
			width: "100%",
			padding: "10px",
			textAlign: "center"
		});
	b.setAttribute('id', "alertMessage");
	document.body.appendChild(b);
	this.setMessage = function (a) {
			while (b.firstChild) {
				b.removeChild(b.firstChild)
			};
			b.appendChild(document.createTextNode(a))
		};
	this.toggleVisibility = function () {
			b.style.display = b.style.display === "none" ? "block" : "none"
		}
}

