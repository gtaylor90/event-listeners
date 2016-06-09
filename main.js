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
var theList2 = document.querySelector("#add-guest-bonus ul")
var buttonList = document.querySelector("#add-guest-bonus li")

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


// Task number two
var guestList = function(newEventObject) {
    if (newEventObject.keyCode === 13) {
        var guestListItem = document.createElement("li")
        var inputNode = newEventObject.target
        var userText = inputNode.value
        console.log(userText)
        guestListItem.className = "guest"
        guestListItem.textContent = userText
        // guestListItem.innerHTML("<li class="guest">" + userText + "</li>")
        theList.appendChild(guestListItem)
        inputNode.value = ''
    }
}


// Task number three
var guestList2 = function(newEventObject) {
    if (newEventObject.keyCode === 13) {
        var inputNode = newEventObject.target
        var userText = inputNode.value
        var buttons = document.querySelector("#add-guest-bonus button")
        console.log(userText)
        var guestButton = document.createElement("button")
        var guestListItem = document.createElement("li")
        guestListItem.className = "guest"
        guestListItem.textContent = userText
        // guestListItem.innerHTML("<li class="guest">" + userText + "</li>")
        theList2.appendChild(guestListItem)
        guestListItem.appendChild(guestButton)
        inputNode.value = ''
    }
}

var removeGuest = function(){

}


// Task one
hideButton.addEventListener('click', hideExample)


// Task two
// window.addEventListener('keydown', guestList)

// Task three
window.addEventListener('keydown', guestList2)



