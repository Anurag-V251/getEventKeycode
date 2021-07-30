const keyp = document.querySelector('.keyp');
const keyc = document.querySelector('.keyc');
const keyw = document.querySelector('.keyw');
const container = document.querySelector('.container');
var start= document.getElementById('show');
const all = document.querySelectorAll('.key');


all.forEach(key =>{
    key.style.display = 'none'
})

start.style.display = 'inline-flex'



window.onkeypress = function(evt) {

    if(evt){
        all.forEach(key =>{
            key.style.display = 'inline-flex'
        })
     }

    start.remove();
    evt = evt || window.event;
    var charCode = evt.keyCode;
    var eventcode = evt.code;
    var charStr = String.fromCharCode(charCode);
    keyp.innerText = charStr;
    keyc.innerHTML = charCode;
    keyw.innerText = eventcode;

};




