var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;

function intializePlayer() {
    // Set object references
    vid = document.getElementById("my_video");
    playbtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    mutebtn = document.getElementById("mutebtn");
    volumeslider = document.getElementById("volumeslider");
    fullscreenbtn = document.getElementById("fullscreenbtn");
    // Add event listeners
    playbtn.addEventListener("click", playPause, false);
    seekslider.addEventListener("change", vidSeek, false);
    vid.addEventListener("timeupdate", seektimeupdate, false);
    mutebtn.addEventListener("click", vidmute, false);
    volumeslider.addEventListener("change", setvolume, false);
    fullscreenbtn.addEventListener("click", toggleFullScreen, false);
}
window.onload = intializePlayer;

function playPause() {
    if (vid.paused) {
        vid.play();
        $(".play").hide();
        $(".pause").show();


    } else {
        vid.pause();
        $(".play").show();
        $(".pause").hide();
    }
}

function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}

function seektimeupdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
        dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
        curmins = "0" + curmins;
    }
    if (durmins < 10) {
        durmins = "0" + durmins;
    }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}

function vidmute() {
    if (vid.muted) {
        vid.muted = false;
        $(".mute").hide();
        $(".unmute").show();
        // mutebtn.innerHTML = "Mute";
    } else {
        vid.muted = true;
        $(".mute").show();
        $(".unmute").hide();
        //mutebtn.innerHTML = "Unmute";
    }
}

function setvolume() {
    vid.volume = volumeslider.value / 100;
}

function toggleFullScreen() {
    if (vid.requestFullScreen) {
        vid.requestFullScreen();
    } else if (vid.webkitRequestFullScreen) {
        vid.webkitRequestFullScreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    }
}





/* function intializePlayer() {
    
    let stop = document.getElementById('stop');
    let btn = document.getElementById('btn');
    let seekslider = document.getElementById("seekslider")


    seekslider.addEventListener("change", vidSeek, false);

}

window.onload = intializePlayer; */


/* function playPause() {
    var vid = document.getElementById('my_video')
    if (vid.paused) {
        vid.play();
        $('#stop').hide();
        $('#btn').show();

    } else {
        vid.pause();
        $('#stop').show();
        $('#btn').hide();
    }
} */

/* function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
    alert.seekto
}

function seektimeupdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
} */























/* function playPause(vid) {
    var vid = document.getElementById(vid);
    if (vid.paused) {
        vid.play();
        btn.innerHTML = "Pause";
    } else {
        vid.pause();
        btn.innerHTML = "Play";
    }
} */