let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementsByClassName("reset-button");
let newbtn=document.querySelector(".new-button");
let msgcon=document.querySelector(".msg-container")
// let msgp=document.querySelector("#msg");
let msgp=document.getElementById("msg");
let turn0=false;
const winpatterns=[
    [0,1,2],
    [0.3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
if(turn0){
    box.innerHTML="0";
    turn0=false;
}
else{
    box.innerHTML="X";
    turn0=true;
}
box.disabled=true;
checkwinner();
    });
})
const showwinner = (winner) => {
    // function showwinner(){
document.getElementById("msg").innerText=`Congratulation Winner is ${winner}`;
msgcon.classList.remove("hide");
}
const checkwinner = () =>{
    // function checkwinner(winner){
    for( let pattern of winpatterns){
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
  
    let pos1value =      boxes[pattern[0]].innerText;
    let pos2value =      boxes[pattern[1]].innerText;
    let pos3value =      boxes[pattern[2]].innerText;
    if(pos1value !== " " && pos2value !== " " && pos3value !== " "){
    if(pos1value === pos2value && pos2value === pos3value){
        console.log("winner",pos1value);
        showwinner(pos1value);
        // document.querySelector("#msg").innerText=pos1value;
    }
}
}
}