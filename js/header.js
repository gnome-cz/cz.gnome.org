const button = document.getElementById("menuToggler");
const hamburger = button.getElementsByClassName("hamburger")[0];
const menu = document.getElementById("menu");

button.addEventListener("click", () => {
	button.classList.toggle("open");
	const open = button.classList.contains("open");
	hamburger.classList.toggle("open", open);
	if (open) {
		menu.style.maxHeight = menu.scrollHeight + "px";
	} else {
		menu.style.maxHeight = "";
	}
});
