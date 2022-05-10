let i = 0;
let Ftxt = "If you are homeless";
let first = document.getElementById('first')
let flashBar = $('.flashing-bar');

function type() {
    if(i < Ftxt.length) {
        first.innerHTML += Ftxt.charAt(i);
        i++;
        setTimeout(() => {
            $(flashBar[0]).removeClass('factive');
            $(flashBar[1]).addClass('factive');
        }, Ftxt.length + 3000);
        setTimeout(type, 100)
    }
}

let x = 0;
let Stxt = "just buy a house";
let second = document.getElementById('second')

function type2() {
    if(x < Stxt.length) {
        second.innerHTML += Stxt.charAt(x);
        x++;
        setTimeout(type2, 100)
    }
}

type();
setTimeout(() => {
    type2();
}, Ftxt.length + 4000)