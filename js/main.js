let sidebar = document.getElementsByClassName("sidebar")[0];
function changeSidebar(e) {
	e.classList.toggle("d-none");
	if (e.classList.contains("menu-reveal")) {
		e.nextElementSibling.classList.toggle("d-none");
		sidebar.classList.toggle("fade-sidebar");
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

// sticky navbar
let navbar = document.getElementsByClassName("main-nav")[0];
let sticky = navbar.offsetTop;

function stickyAction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		sidebar.classList.add("sidebar-move-up");
	} else {
		navbar.classList.remove("sticky");
		sidebar.classList.remove("sidebar-move-up");
	}
}

// back to top
window.onscroll = function () {
	backTotop();
	stickyAction();
};
