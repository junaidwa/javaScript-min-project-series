`"use strict  ;"`
let boxes=document.querySelectorAll(".box");
// let resetbtn=document.getElementsByClassName("reset-button");
let resetbtn= document.querySelector(".reset-button");
let newbtn=document.querySelector(".new-button");
let msgcon=document.querySelector(".msg-container")
let msgp=document.getElementById("msg");
let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener('click', ()=> {
if(turn0){
    box.innerText="0";
    box.classList.add("zero");
    
    turn0=false;
}
else{
    box.innerText="X";
    box.classList.add("cross");
    turn0=true;
}
box.disabled=true;
// boxes.disabled=true;
// boxes.classList.add("disabled");
// box.classList.add("disabled"); 

checkwinner();
    });
})
newbtn.addEventListener('click', ()=>{
    location.reload();
})
resetbtn.addEventListener('click', ()=>{
    location.reload();
})
const showwinner = (pos2value) => {
    
// let boxes=document.querySelectorAll(".box");

      document.querySelector("#msg").innerText=`Winner is ${pos2value}`;
      msgcon.classList.remove("hide");
      boxes.forEach((box) => {
        box.disabled = true;
    });

  
}
const drawgame = ()=>{
    document.querySelector("#msg").innerText=`Draw Game`;
    msgcon.classList.remove("hide");

}
// const checkwinner = () =>{
     
//     for( let pattern of winpatterns){
//     let pos1value =      boxes[pattern[0]].innerText;
//     let pos2value =      boxes[pattern[1]].innerText;
//     let pos3value =      boxes[pattern[2]].innerText;
//     // console.log(pos1value);
//     if(pos1value !=="" && pos2value !=="" && pos3value !== ""){
//     if(pos1value === pos2value && pos2value === pos3value){
//         // console.log("winner",  pos2value);
//         showwinner(pos2value);
//         break;
//     }
   
//     // document.querySelector("#msg").innerText=`Winner is ${pos2value}`;
//     // msgcon.classList.remove("hide");
// }


// }
// }
const checkwinner = () => {
    let draw = true;
    for (let pattern of winpatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if (pos1value !== "" && pos2value !== "" && pos3value !== "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                showwinner(pos2value);
                return;
            }
        } else {
            draw = false;
        }
    }
    if (draw) {
        drawgame();
    }
};
