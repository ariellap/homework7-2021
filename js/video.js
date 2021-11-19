var video = document.querySelector("#player1");//grabs the ID from index, must be in quotes

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.currentTime)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = 0.95;
	console.log("New video speed is " + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate = 1.05;
	console.log("New video speed is " + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Old video speed is " + video.playbackRate);
	video.currentTime() + 10;
	console.log("New video speed is " + video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("Video is muted")
	video.muted = true;
});

const mute = document.getElementById("mute");

mute.addEventListener("click", ()=>{

    if(mute.innerText === "Mute"){
        mute.innerText = "Unmute";
    }
	else{
        mute.innerText= "Mute";
		video.muted = false;
    }
});


function thisVolume(volume_value) { 
	var video = document.querySelector("#slider"); 
	document.getElementById("volume").innerHTML=volume_value; 
	video.volume = volume_value / 100; 
	}

function updateVolume() {
  if (video.muted) {
    video.muted = false;
  }

  video.volume = volume.value;
}

volume.addEventListener('input', updateVolume);

function toggleClass(el){
	if(el.className == "video"){
		el.className = "oldSchool";
	} else {
		el.className = "video";
	}
}
