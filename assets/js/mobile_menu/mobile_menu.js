
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuModal = document.querySelector(".mobile-menu-modal");

function modalClose(c){
  if (c.target == mobileMenuModal){
    mobileMenuModal.style.width = "0%";
    mobileMenu.style.width = "0vw";
  }
}

function openClose(){
  if (mobileMenuModal.style.width != "100%"){
		mobileMenuModal.style.width = "100%";
		mobileMenu.style.width = "60vw";
	}
	else{
	  mobileMenuModal.style.width = "0%";
	  mobileMenu.style.width = "0vw";
	}
}

mobileMenuButton.addEventListener("click", openClose);
mobileMenuModal.addEventListener("click", modalClose);

