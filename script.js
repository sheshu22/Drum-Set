//document.querySelector("button").addEventListener("click",clickk);

let leng = document.querySelectorAll(".drum").length;
for (let i = 0; i < leng; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickk);

    function clickk() {
        let alpha = this.innerText;
        switch (alpha) {
            case 'A':
                let audio1 = new Audio("/Drum-Set/sounds/tom-1.mp3");
                audio1.play();

                break;
            case 'S':
                let audio2 = new Audio("/Drum-Set/sounds/tom-2.mp3");
                audio2.play();

                break;
            case 'D':
                let audio3 = new Audio("/Drum-Set/sounds/tom-3.mp3");
                audio3.play();

                break;
            case 'F':
                let audio4 = new Audio("/Drum-Set/sounds/tom-4.mp3");
                audio4.play();

                break;
            case 'G':
                let audio5 = new Audio("/Drum-Set/sounds/snare.mp3");
                audio5.play();

                break;
            case 'H':
                let audio6 = new Audio("/Drum-Set/sounds/crash.mp3");
                audio6.play();

                break;
            case 'J':
                let audio7 = new Audio("/Drum-Set/sounds/kick-bass.mp3");
                audio7.play();

                break;

            default:
                console.log("NO AUDIO");

                break;
        }
    }
}


document.addEventListener("keydown",function(){
    alert("keyyyy");
})