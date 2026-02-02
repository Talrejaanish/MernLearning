//onclick,onload,onmouseover,onmouseout,onkeypress,on keydown,onkeyup
function onclickfunc(){
    console.log("you clicked me");
};
const onkeypressfunc = (key) => {

    console.log("you pressed a key",key.key);
}
const onkeydownfunc = (key) => {

    console.log("you down a key",key.key);
}
const onkeyupfunc = (key) => {

    console.log("you released a key",key);
}
function func1(){
    console.log("you hovered in func1");
}
function func2(){
    console.log("you hovered out func2");
}
function changebg(event){
    const box=document.getElementById(event.id);
    box.style.backgroundColor="red";
}
const box1=document.getElementById("box-1");
box1.addEventListener("click",()=>{
    changebg(box1);
});