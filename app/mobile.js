import './main.scss';
import './plugin';

$(document).ready(function() {
    let app  = document.createElement('div');
    app.innerHTML = '<h1>Hello World</h1>';
    document.body.appendChild(app);
    $('h1').yellow();
});
