// selecting add-popup-button, popup-box, popup-box

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display= "block"
    popupbox.style.display= "block"

})

// select cancel button

var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"

})

// select container, add-book, book-title-id, book-author-input, book-description 

var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleid = document.getElementById("book-title-id"); 
var bookauthorinput = document.getElementById("book-author-input");
var bookdescription = document.getElementById("book-description");



addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitleid.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebutton(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
    

})

function deletebutton(event) {
    event.target.parentElement.remove()

}
// Done