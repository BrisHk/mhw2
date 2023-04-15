function Results(res){
    const titolo = document.querySelector("h1.TextExit");
    titolo.textContent = RESULTS_MAP[res.dataset.choiceId].title;
    const testo = document.querySelector("div.TextExit");
    testo.textContent = RESULTS_MAP[res.dataset.choiceId].contents;
    const finalblock = document.querySelector("div.exit");
    finalblock.classList.remove("hidden");
}

function EndPool(chosen){
    if(chosen[1].dataset.choiceId === chosen[2].dataset.choiceId){
            return Results(chosen[1]);
        }
    return Results(chosen[0])
}

const boxes = document.querySelectorAll(".choice-grid div");
for(const box of boxes){
    box.addEventListener('click', Img_Selection);
}
document.querySelector("button").addEventListener('click',endgame);

function ResetSec(section){
    const notchosen = section.querySelectorAll(".unchecked");
    const chosen = section.querySelector(".checked");
    if(chosen){
        chosen.classList.remove("checked");
        chosen.querySelector(".checkbox").src= "images/unchecked.png";
    }
        for(const choice of notchosen){
        choice.classList.remove("unchecked");
        }
}

function Img_Selection(event){
    ResetSec(event.currentTarget.parentNode);
    const checkbox = event.currentTarget.querySelector(".checkbox");
    checkbox.src = "images/checked.png";
    event.currentTarget.classList.add("checked");
    const listabox = event.currentTarget.parentNode.querySelectorAll(".choice-grid div");
    for(const box of listabox){
        if(box !== event.currentTarget){
            box.classList.add("unchecked");
        }
    }
    CheckEnd();
}

function Reset(){
    const notchosen = document.querySelectorAll(".unchecked");
    const chosen = document.querySelectorAll(".checked");
        for(const chosenOne of chosen){
            chosenOne.classList.remove("checked");
            chosenOne.querySelector(".checkbox").src= "images/unchecked.png";
        }
        for(const choice of notchosen){
        choice.classList.remove("unchecked");
        }
}

function endgame(){
    const finalblock = document.querySelector("div.exit")
    Reset();
    for(const box of boxes){
        box.addEventListener('click', Img_Selection);
    }
    finalblock.classList.add("hidden");
 }

 function CheckEnd(){
    const chosen = document.querySelectorAll(".checked");
    if(chosen.length === 3){
        for(const box of boxes){
            box.removeEventListener('click', Img_Selection);
        }
        EndPool(chosen);
    }
}