// utils.js - a little class of utility functions for work stuff

var contegix = {
MessageBar: function() {
	var a = function (a, b) {
		for (var c in b) {
			a.style[c] = b[c];
		}
		return a;
	};
	var b = a(document.createElement("div"), { top: 0, left: 0, position: "fixed", background: "red", width: "100%", padding: "10px", textAlign: "center" });
	b.setAttribute('id', "alertMessage");
	document.body.appendChild(b);
	this.setMessage = function (a) { while (b.firstChild) { b.removeChild(b.firstChild) } b.appendChild(document.createTextNode(a)); };
	this.toggleVisibility = function () { b.style.display = b.style.display === "none" ? "block" : "none"; };
},
parseJSON: (function (s) {

  var m = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"' : '\\"',
    '\\': '\\\\'
  };

  s.parseJSON = function (filter) {
     /*
           Reason: Why this function is useful?
     */
    // Parsing happens in three stages. In the first stage, we run the text against
    // a regular expression which looks for non-JSON characters. We are especially
    // concerned with '()' and 'new' because they can cause invocation, and '='
    // because it can cause mutation. But just to be safe, we will reject all
    // unexpected characters.

    try {
      if (/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(this)) {

          // In the second stage we use the eval function to compile the text into a
          // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
          // in JavaScript: it can begin a block or an object literal. We wrap the text
          // in parens to eliminate the ambiguity.

          var j = eval('(' + this + ')');

          // In the optional third stage, we recursively walk the new structure, passing
          // each name/value pair to a filter function for possible transformation.

          if (typeof filter === 'function') {

            function walk(k, v) {
              if (v && typeof v === 'object') {
                for (var i in v) {
                  if (v.hasOwnProperty(i)) {
                    v[i] = walk(i, v[i]);
                  }
                }
              }
              return filter(k, v);
            }

            j = walk('', j);
          }
          return j;
        }
      } catch (e) {

  // Fall through if the regexp test fails.

      }
      throw new SyntaxError("parseJSON: filter failed");
    };
  }
)
};
var MessageBar = contegix.MessageBar; // set up the function sans-class, to preserve legacy
