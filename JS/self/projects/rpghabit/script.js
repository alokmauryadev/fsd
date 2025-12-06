let addQuestModal = document.querySelector(".addQuestModal")
let overlay = document.querySelector(".overlay")
let modalActions = document.querySelector(".modal-actions")
let addQuestBtn = document.getElementById("add-quest-btn")
modalActions.addEventListener("click",(event) => { if(event.target.id==="cancel"){
    addQuestModal.style.display = "none"
    overlay.style.display = "none"
} })
addQuestBtn.addEventListener("click",(event) => { 
        addQuestModal.style.display = "flex"
    overlay.style.display = "block"

 })

const player = {
    name: "Alok Maurya",
    level: 1,
    xp: 200,
    rank: "E",
    stats: {
        str: 10,
        int: 10,
        agi: 10,
    }
}

class QuestManager{
    constructor(){
        this.quests = []
    }
    
}


class Quest{
    constructor(id, title, statReward, XPReward, isCompleted, type, createdAT){
        this.id = id;
        this.title = title;
        this.statReward = statReward;
        this.XPReward = XPReward;
        this.isCompleted = isCompleted;
        this.type = type;
        this.createdAT = createdAT;
    }
}