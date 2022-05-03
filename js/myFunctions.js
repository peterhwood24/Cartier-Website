function hideStartScreen() {
    document.getElementById("bgCover").style.display = "none";
    document.getElementById("mainCode").style.display = "block";
    document.getElementById("startSong").play();
    document.getElementById("startSong").loop = true;
    var vid = document.getElementById("myVideo");
    if (vid)
        vid.play();
    // console.log(vid);
}

function musicPlay() {

}

