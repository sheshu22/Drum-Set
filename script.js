//document.querySelector("button").addEventListener("click",clickk);

let leng=document.querySelectorAll(".drum").length;
for(let i=0;i<leng;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",clickk);
    function clickk()
    {
        alert(" clicked");
    }
}
