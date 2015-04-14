$('#main').css('height', window.innerHeight);

// https://github.com/scotch-io/scotch-panels
$('#sidebar').scotchPanel({
    containerSelector: 'body', // As a jQuery Selector
    direction: 'left', // Make it toggle in from the left
    duration: 300, // Speed in ms how fast you want it to be
    transition: 'ease', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
    distanceX: '200px', // Size fo the toggle
    enableEscapeKey: true // Clicking Esc will close the panel
});
