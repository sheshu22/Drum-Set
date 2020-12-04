//document.querySelector("button").addEventListener("click",clickk);

let leng=document.querySelectorAll(".drum").length;
for(let i=0;i<leng;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",clickk);
    function clickk()
    {
       this.style.color="white";
    }
}

// let audio= new Audio("/Drum-Set/sounds/tom-1.mp3");
//         audio.play();