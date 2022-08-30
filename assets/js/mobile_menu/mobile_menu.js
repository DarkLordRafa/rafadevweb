
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuArea = document.querySelector(".mobile-menu-area");

function modalClose(c){
  if (c.target == mobileMenuArea){
    mobileMenuArea.style.width = "0%";
    mobileMenu.style.width = "0vw";
  }
}

function openClose(){
  if (mobileMenuArea.style.width != "100%"){
		mobileMenuArea.style.width = "100%";
		mobileMenu.style.width = "60vw";
	}
	else{
	  mobileMenuArea.style.width = "0%";
	  mobileMenu.style.width = "0vw";
	}
}

mobileMenuButton.addEventListener("click", openClose);
mobileMenuArea.addEventListener("click", modalClose);

