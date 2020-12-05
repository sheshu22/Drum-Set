//document.querySelector("button").addEventListener("click",clickk);

let leng = document.querySelectorAll(".drum").length;
for (let i = 0; i < leng; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let click = this.innerText;
        makeSound(click);
        btnPressed(click);

    });
}

document.addEventListener("keydown", function (event) {

    let down = event.key;
    makeSound(down);
    btnPressed(down);
});

function makeSound(par) {

    switch (par) {
        case 'a':
            let audio1 = new Audio("/Drum-Set/sounds/tom-1.mp3");
            audio1.play();

            break;
        case 's':
            let audio2 = new Audio("/Drum-Set/sounds/tom-2.mp3");
            audio2.play();

            break;
        case 'd':
            let audio3 = new Audio("/Drum-Set/sounds/tom-3.mp3");
            audio3.play();

            break;
        case 'f':
            let audio4 = new Audio("/Drum-Set/sounds/tom-4.mp3");
            audio4.play();

            break;
        case 'g':
            let audio5 = new Audio("/Drum-Set/sounds/snare.mp3");
            audio5.play();

            break;
        case 'h':
            let audio6 = new Audio("/Drum-Set/sounds/crash.mp3");
            audio6.play();

            break;
        case 'j':
            let audio7 = new Audio("/Drum-Set/sounds/kick-bass.mp3");
            audio7.play();

            break;

        default:
            alert("Press/Click A-S-D-F-G-H-J Buttons only");

            break;
    }
}

function btnPressed(currentKey){

let activeButton=document.querySelector("." + currentKey);
activeButton.classList.add("pressed")

setTimeout(()=>{
    activeButton.classList.remove("pressed");
},100);

}