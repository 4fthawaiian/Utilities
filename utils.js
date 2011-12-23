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
	this.setMessage = function (a) {
          while (b.firstChild) {
            b.removeChild(b.firstChild);
          }
          b.appendChild(document.createTextNode(a));
        };
	this.toggleVisibility = function () { b.style.display = b.style.display === "none" ? "block" : "none"; };
},
GetHTTPTickets: function() {
var txt = $("table#ticket_list").text();
var ticket_row = 0;
var display_tickets = new Array();

$('table#ticket_list tr').each(function() {
    if(ticket_row > 0) {
      ticket_number = $(this).find("td:eq(1)").find("a:eq(1)").text();
      ticket_subject_container = $(this).find("td:eq(1)");
      ticket_subject_lines = ($(this).find("td:eq(1)").text().split('\n'));
      ticket_subject = $.trim(ticket_subject_lines[(ticket_subject_lines.length - 2)]);
      if(ticket_subject.search(/HTTP Availability/) > 0) {
        engineer_lines = $(this).find("td:eq(3)").text().split('\n');
        ticket_status = $(this).find("td:eq(4)").text();
        engineer = $.trim(engineer_lines[1]);
        engineer_status = "On Queue";
        if ($.trim(engineer_lines[2]) !== "") {
          engineer_status = $.trim(engineer_lines[2]);
        }
        display_tickets[display_tickets.length] = {"number": ticket_number, "subject": ticket_subject, "engineer": engineer, "status": ticket_status, "engineer_status": engineer_status, "URL": "https://noctane.contegix.com/noc/tickets/"+ticket_number};
      }
    }
    ticket_row += 1;
});
return display_tickets;
}
};
