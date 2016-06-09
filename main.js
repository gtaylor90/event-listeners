// GO!

console.log('script loaded')


//vars go up here:

//Task one Vars
var hideButton = document.querySelector("#hide-nav button")

var navBar = document.querySelector("#hide-nav div.nav-menu")

var hideNavStatus = {
    hidden: false
}

// Task Two Vars
var guestListItem = document.querySelector("#add-guest input")
var theList = document.querySelector("#add-guest ul")

// Task Three Vars


// Functions here

// Task number one
var hideExample = function() {
    // alert('test')	
    if (hideNavStatus.hidden === false) {
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

var guestList = function(newEventObject) {
    if (newEventObject.keyCode === 13) {
        var inputNode = newEventObject.target
        var userText = inputNode.value
        console.log(userText)
        var guestListItem = document.createElement("li")
        guestListItem.className = "guest"
        guestListItem.textContent = userText
        // guestListItem.innerHTML("<li class="guest">" + userText + "</li>")
        theList.appendChild(guestListItem)
        inputNode.value = ''
    }
}


// Task one
hideButton.addEventListener('click', hideExample)


// Task two
window.addEventListener('keydown', guestList)





