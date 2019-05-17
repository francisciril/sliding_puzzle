function swiffer() {
    for (var r = 1; r <= 3; r++) {
        for (var c = 1; c <= 3; c++) {
            var r2 = Math.floor(Math.random() * 3 ) + 1;
            var c2 = Math.floor(Math.random() * 3 ) + 1;
            moveBox("c" + r + c, "c" + r2 + c2); 
        }
    }
}
function moveBox(c1, c2) {
    var t = document.getElementById(c1).className;
    document.getElementById(c1).className = document.getElementById(c2).className;
    document.getElementById(c2).className = t;
}
function clickBox(r, c) {
    var cl = document.getElementById("c" + r + c);
    var ti = cl.className;
    if (ti != "box9") {
        if (c < 3) {
            if (document.getElementById("c" + r + (c + 1)).className == "box9") {
                moveBox("c" + r + c, "c" + r + (c + 1));
                return;
            }
        }
        if (c > 1) {
            if (document.getElementById("c" + r + (c - 1)).className == "box9") {
                moveBox("c" + r + c, "c" + r + (c - 1));
                return;
            }
        }
        if (r > 1) {
            if (document.getElementById("c" + (r - 1) + c).className == "box9") {
                moveBox("c" + r + c, "c" + (r - 1) + c);
                return;
            }
        }
        if (r < 3) {
            if (document.getElementById("c" + (r + 1) + c).className == "box9") {
                moveBox("c" + r + c, "c" + (r + 1) + c);
                return;
            }
        }
    }
}

