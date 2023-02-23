var headings = document.getElementsByClassName('widow');
for (var i = 0; i < headings.length; i++) {
    var h1s = headings[i].innerHTML.split(' ');
    h1s[h1s.length - 2] += "&nbsp;" + h1s[h1s.length - 1];
    h1s.pop();
    headings[i].innerHTML = h1s.join(' ');
}