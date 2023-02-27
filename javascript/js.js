"use Strict";
function myFunction() {
	var x = document.getElementById("hidden-menu");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

document.addEventListener("mouseup", function (e) {
	var container = document.getElementById("hidden-menu");
	if (!container.contains(e.target)) {
		container.style.display = "none";
	}
});
