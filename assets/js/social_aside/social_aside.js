
const socialAsideIcons = document.querySelector(".social-aside__icons");
const socialAsideCloseIcon = document.querySelector(".social-aside__close i");

function openCloseAside(){
	console.log("work");
	if (socialAsideIcons.classList.contains("social-aside-closed")){
		socialAsideIcons.classList.remove("social-aside-closed");
		socialAsideCloseIcon.classList.remove("social-aside__close-disabled");
		socialAsideIcons.classList.add("social-aside-opened");
		socialAsideCloseIcon.classList.add("social-aside__close-enabled");
	}
	else{
		socialAsideIcons.classList.remove("social-aside-opened");
		socialAsideCloseIcon.classList.remove("social-aside__close-enabled");
		socialAsideIcons.classList.add("social-aside-closed");
		socialAsideCloseIcon.classList.add("social-aside__close-disabled");
	}
}

socialAsideCloseIcon.addEventListener("click", openCloseAside);