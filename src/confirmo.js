/* 
   confirmo is a simple and light weight js library that works as sweet alert js 
   written by EdinyangaOttoho
   2020
 */
var confirmoinit = document.createElement('div');
confirmoinit.className = 'confirmo-backdrop';
confirmoinit.id = 'confirmo-modal';
document.body.addEventListener('keydown', function(event) {
	if (event.keyCode == 27) {
		closeconfirmomodal();
	}
});
document.body.appendChild(confirmoinit);

document.getElementById('confirmo-modal').innerHTML = '<center><div class="confirmo-modal"><p align="right"><button class="confirmo-close" onclick="closeconfirmomodal()">&times;</button></p><div id="confirmo-content"></div><div class="confirmo-controls"><button id="confirmo-left" class="confirmo-btn">&#10004; Yes</button><button id="confirmo-right" class="confirmo-btn" onclick="closeconfirmomodal()">&times; No</button></div></div></center>';
var confirmomodalstate = false;
function showconfirmomodal(msg) {
	var confirmomodalstate = true;
	document.getElementById("confirmo-modal").style.display = "block";
	document.getElementById("confirmo-content").innerHTML = msg;
	document.getElementById("confirmo-modal").focus();
}
function closeconfirmomodal() {
	var confirmomodalstate = false;
	document.getElementById("confirmo-modal").style.display = "none";
	
}
var confirmo = {
	init:function(props={}) {
		var confirmoelements = document.querySelectorAll("*[confirmo-message]");
		for (let i = 0; i < confirmoelements.length; i++) {
			var confirmo_message = confirmoelements[i].getAttribute("confirmo-message");
			var confirmobool = false;
			if (confirmo_message != "") {
				if (confirmoelements[i].getAttribute("confirmo-func")) {
					confirmobool = true;
				}
			}
			if (confirmobool == false) {
				console.error("Some element(s) is/are not configured properly. Please check the docs at https://google.com for more details on configuration");
			}
			else {
				confirmoelements[i].onclick = function() {
					var confirmofunctionname = this.getAttribute("confirmo-func") + "()";
					showconfirmomodal(this.getAttribute('confirmo-message'));
					document.getElementById("confirmo-left").setAttribute('onclick', confirmofunctionname+';closeconfirmomodal()');
				
				}
			}
		}
		for (i in props) {
			if (i == "yesBg") {
				document.getElementById("confirmo-left").style.backgroundColor = props[i];
			}
			else if (i == "noBg") {
				document.getElementById("confirmo-right").style.backgroundColor = props[i];
			}
			else if (i == "backColor") {
				document.querySelector(".confirmo-modal").style.backgroundColor = props[i];
			}
			else if (i == "textColor") {
				document.querySelector(".confirmo-modal").style.color = "white";
			}
		}
	},
	show:function(props) {
		for (let i in props) {
			if (i == "msg") {
				showconfirmomodal(props.msg);
			}
			else if (i == "callback") {
				document.getElementById("confirmo-left").onclick = function() {
					if (typeof(props.callback) == "function") {
						props.callback();
					}
					closeconfirmomodal();
				}
			}
		}
	}

};

