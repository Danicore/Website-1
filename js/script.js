const menu = document.getElementById("menu");

const getIt = () => {
	const dropdown = document.getElementById("dropdown");
	
	dropdown.style.display = "block";
}

const dontGetIt = () => {
	dropdown.style.display = "none";
}

menu.onmouseover = getIt;
menu.onmouseout = dontGetIt;