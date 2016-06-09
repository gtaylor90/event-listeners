// GO!

console.log('script loaded')


//vars go up here
var hideButton = document.querySelector("#hide-nav button")

var navBar = document.querySelector("#hide-nav div.nav-menu")

var hideNavStatus = {
	hidden: false
}

var hideExample = function(){
	// alert('test')	
	if(hideNavStatus.hidden === false){
		// alert('is hidden')
		navBar.style.opacity = 0
		// navBar.style.visibility = 'hidden'
		hideNavStatus.hidden = true
	} else {
		// alert('is visible')
		navBar.style.opacity = 1
		// navBar.style.visibility = 'visible'
		hideNavStatus.hidden = false
	}
}

hideButton.addEventListener('click', hideExample)

