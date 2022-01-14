let sidebar = document.getElementsByClassName("sidebar")[0];
// let triggered = docu
function changeSidebar(e) {
	e.classList.toggle("d-none");
	if (e.classList.contains("menu-reveal")) {
		e.nextElementSibling.classList.toggle("d-none");
		sidebar.classList.toggle("fade-sidebar")
	} else {
		e.previousElementSibling.classList.toggle("d-none");
		sidebar.classList.toggle("fade-sidebar");
	}
}

let toTopbtn = document.getElementsByClassName("goTop")[0];

let pin = document.getElementById("pin");
let startingPoint = pin.offsetTop;
function backTotop() {
	if (window.pageYOffset <= startingPoint) {
		toTopbtn.classList.add("goTop-hidden");

		toTopbtn.classList.remove("goTop");
	} else {
		toTopbtn.classList.add("goTop");
		toTopbtn.classList.remove("goTop-hidden");
	}
}

// back to top
window.onscroll = function () {
	backTotop();
};

