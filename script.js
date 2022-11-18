function func1() {
	document.getElementsByClassName('content')[0].style.display = "none";
	document.getElementById('body').style.background = "linear-Gradient(to bottom right, rgb(0, 35, 70), rgb(37, 73, 120), rgb(70, 130, 180))";
	document.getElementById('body').style.backgroundSize = "cover";
	document.getElementById('body').style.backgroundAttachment = "fixed";
	document.getElementsByClassName('base')[0].style.display = "block";
}

function func2() {
	document.getElementsByClassName('base')[0].style.display = "none";
	document.getElementById('art1').style.display = "block";
}

function func3() {
	document.getElementsByClassName('base')[0].style.display = "none";
	document.getElementById('art2').style.display = "block";
}

function func4() {
	document.getElementsByClassName('base')[0].style.display = "none";
	document.getElementById('art3').style.display = "block";
}

function func5() {
	document.getElementById('art1').style.display = "none";
	document.getElementById('art2').style.display = "none";
	document.getElementById('art3').style.display = "none";
	document.getElementsByClassName('base')[0].style.display = "block";
}