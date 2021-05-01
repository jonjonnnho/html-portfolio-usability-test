var i = 0;
var arr = ['UI/UX Developer','Graphic Designer','Web/App Developer','Student'];
var txt = 'UI/UX Developer';
var printTxt = '';
var printSpeed = 50;
introText();

function introText() {
    for (i=0; i < txt.length; i++) {
        printTxt += txt.charAt(i);
        document.write('<p id="welcomeTitle">' + printTxt + '</p>');
    }
}

