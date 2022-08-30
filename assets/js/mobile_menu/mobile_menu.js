
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector("#mobile-menuu");

mobileMenuButton.addEventListener("click", function(){
	if (mobileMenu.style.width != "40vw"){
		mobileMenu.style.width = "40vw";
	}
	else{
		mobileMenu.style.width = "0vw";
	}
});