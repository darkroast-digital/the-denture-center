/*
| -------------------------------------------------------------------------
| #SETUP
| -------------------------------------------------------------------------
*/



// #JQUERY
// ========================================================================

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}



// #AXIOS
// ========================================================================

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



// #SLICK
// ========================================================================

window.slick = require('slick-carousel');



// #GMAPS
// ========================================================================

window.GMaps = require('gmaps');


