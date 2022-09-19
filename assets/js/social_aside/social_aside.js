
const socialAsideIcons = document.querySelector(".social-aside__icons");
const socialAsideCloseIcon = document.querySelector(".social-aside__close i");

function toggleAside(){
	console.log("work");
	if (socialAsideIcons.classList.contains("social-aside-closed")){
		socialAsideIcons.classList.remove("social-aside-closed");
		socialAsideCloseIcon.classList.remove("social-aside__close-disabled");
	}
	else{
		socialAsideIcons.classList.add("social-aside-closed");
		socialAsideCloseIcon.classList.add("social-aside__close-disabled");
	}
}

socialAsideCloseIcon.addEventListener("click", toggleAside);