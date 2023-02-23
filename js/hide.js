function hide(obj, button) {
    if (button.innerText === 'POKAŻ WIĘCEJ') {
        for (var i = 0; i < obj.length; i++) {
            obj[i].style.display = 'block';

        }
    } else {
        for (var i = 0; i < obj.length; i++) {
            obj[i].style.display = 'none';
        }
    }
    if (button.innerText === 'POKAŻ WIĘCEJ') {
        button.innerText = 'POKAŻ MNIEJ';
    } else {
        button.innerText = 'POKAŻ WIĘCEJ';
    }
}

const ob = document.getElementsByClassName('hidden');
const bt = document.querySelector('.rozwijacz');
bt.onclick = function () {
    hide(ob, bt);
}

const ob2 = document.getElementsByClassName('hidden2');
const bt2 = document.querySelector('.rozwijacz2');
bt2.onclick = function () {
    hide(ob2, bt2);
}

const ob3 = document.getElementsByClassName('hidden3');
const bt3 = document.querySelector('.rozwijacz3');
bt3.onclick = function () {
    hide(ob3, bt3);
}

const ob4 = document.getElementsByClassName('hidden4');
const bt4 = document.querySelector('.rozwijacz4');
bt4.onclick = function () {
    hide(ob4, bt4);
}

const ob5 = document.getElementsByClassName('hidden5');
const bt5 = document.querySelector('.rozwijacz5');
bt5.onclick = function () {
    hide(ob5, bt5);
}

const ob6 = document.getElementsByClassName('hidden6');
const bt6 = document.querySelector('.rozwijacz6');
bt6.onclick = function () {
    hide(ob6, bt6);
}

const ob7 = document.getElementsByClassName('hidden7');
const bt7 = document.querySelector('.rozwijacz7');
bt7.onclick = function () {
    hide(ob7, bt7);
}

const ob8 = document.getElementsByClassName('hidden8');
const bt8 = document.querySelector('.rozwijacz8');
bt8.onclick = function () {
    hide(ob8, bt8);
}

const ob9 = document.getElementsByClassName('hidden9');
const bt9 = document.querySelector('.rozwijacz9');
bt9.onclick = function () {
    hide(ob9, bt9);
}

const ob10 = document.getElementsByClassName('hidden10');
const bt10 = document.querySelector('.rozwijacz10');
bt10.onclick = function () {
    hide(ob10, bt10);
}