
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuModal = document.querySelector(".mobile-menu-modal");
const buttonBars = document.querySelectorAll(".mobile-menu-button span");
const body = document.body;


function modalClose(c){
  toggleButtonBars();
  if (c.target == mobileMenuModal){
    mobileMenuModal.style.width = "0%";
    mobileMenu.style.cssText = "width: 0%; border-width: 0px;";
	  body.style.overflowY = "visible";
  }
}

function toggleButtonBars(){
	if (mobileMenuModal.style.width != "100%"){
		buttonBars[0].classList.add("button-bar-down");
		buttonBars[1].classList.add("button-bar-hide");
		buttonBars[2].classList.add("button-bar-up");
	}
	else{
		buttonBars[0].classList.remove("button-bar-down");
		buttonBars[1].classList.remove("button-bar-hide");
		buttonBars[2].classList.remove("button-bar-up");
	}
}

function openClose(){
  toggleButtonBars();
  if (mobileMenuModal.style.width != "100%"){
		mobileMenuModal.style.width = "100%";
    mobileMenu.style.cssText = "width: 60vw; border-width: 1px;";
		body.style.overflowY = "hidden";
	}
	else{
	  mobileMenuModal.style.width = "0%";
    mobileMenu.style.cssText = "width: 0%; border-width: 0px;";
	  body.style.overflowY = "visible";
	}
}

mobileMenuButton.addEventListener("click", openClose);
mobileMenuModal.addEventListener("click", modalClose);

