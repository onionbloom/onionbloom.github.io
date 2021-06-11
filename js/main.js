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