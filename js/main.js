const button = document.querySelector('#button-tdh');
const tooltip = document.querySelector('#tooltip');

const popperInstance = Popper.createPopper(button, tooltip,{modifiers:[
    {name: 'offset', options: {offset: [0, 0]}}
]});

function show() {
    tooltip.setAttribute('data-show','');
    popperInstance.update();
}

function hide(){
    tooltip.removeAttribute('data-show');
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach(event=> {
    button.addEventListener(event, show);
});

hideEvents.forEach(event => {
    button.addEventListener(event, hide);
});

var modal = document.getElementById("modal-learn");
var btn = document.getElementById("button-learn");
var span = document.getElementsByClassName("modal-close")[0];

// Open modal on button click
btn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on X button click
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal on click outside the modal
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}