class User{
    constructor(name){
        this.name = name;
        this.level = 0;
        this.xp = 0;
        this.rank = "E",
        this.stats = {
            str:0,
            int:0,
            agi:0
        }
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
    class Controller{
constructor(name){
        this.quests = this.getFromlocalStorage();
        this.user = this.getUserData(name)
        this.levelLimits = {
            10: "E",
            20: "D",
            30: "c",
            40: "B",
            60: "A",
            80: "S",
            90: "SS",
            100: "SSS"
        }
        this.savetoLocalStorage();
    }
    // add a quest
    addQuest(id,title,statReward,XPReward){
        const quest = new Quest(id,title,statReward,XPReward,false,"normal",Date.now());
        this.quests.push(quest);
        this.savetoLocalStorage();
        this.updatePlayerStatus();
    }
    // update status
    // toogleStatus(id){
        //     const quest = this.quests.find(e=>e.id===id);
        //     quest.isCompleted = !quest.isCompleted
        // }
    // update player status
    updatePlayerStatus(){
        let currXP = this.user.xp
        if(currXP>100*this.user.level*1.5){
            this.user.level = this.user.level+1
        }
        for (const key in this.levelLimits) {
            if (!Object.hasOwn(this.levelLimits, key)) continue;
            if(this.user.level<Number(key)){
                this.user.rank = this.levelLimits[key]
                break
            }
        }
        this.savetoLocalStorage();
    }
    updateTaskStatus(id){
        const quest = this.quests.find((eQuest)=>eQuest.id===id)
        if(!quest.isCompleted){
            quest.isCompleted = true;
            this.user.stats[quest.statReward] += Number(quest.XPReward);
            this.savetoLocalStorage();
        }
    }
    // streak
    // check level
    // filter tasks
    // savetoLocal storage
    savetoLocalStorage(){
        localStorage.setItem("quest-data",JSON.stringify(this.quests))
        localStorage.setItem("user-data",JSON.stringify(this.user))
    }
    // get from local storage
    getFromlocalStorage(){
       return JSON.parse(localStorage.getItem("quest-data")) || []
    }
    getUserData(name){
        const stored = localStorage.getItem("user-data")
        if(stored){
            return JSON.parse(stored)
        }
        const user = new User(name);
        localStorage.setItem("user-data",JSON.stringify(user))
        return user;
    }
}

class UIHandler{
    constructor(controller){
        this.controller = controller;
        this.addQuestModal = document.querySelector(".addQuestModal")
        this.modalActions = document.querySelector(".modal-actions")
        this.addQuestBtn = document.getElementById("add-quest-btn")
        this.overlay = document.querySelector(".overlay")
        this.questInput = document.getElementById("iQuestName")
        this.statReward = document.getElementById("stats")
        this.XPReward = document.getElementById("xpVal")
        this.questsDiv = document.querySelector(".quests")
        this.playerBasic = document.querySelector(".basicDetails")
        this.eventListeners();
        this.renderQuests();
        this.hideAddModal();
        this.renderPlayerData();
    }
    hideAddModal(){
            this.addQuestModal.style.display = "none"
            this.overlay.style.display = "none"

    }
    eventListeners(){
        this.modalActions.addEventListener("click",(event) => { 
            if(event.target.id==="cancel"){
         this.hideAddModal();       
         } 
        if(event.target.id==="accept"){
            this.addQuest();
        }
    }
    )
        this.addQuestBtn.addEventListener("click",(event) => { 
            this.addQuestModal.style.display = "flex"
            this.overlay.style.display = "block"
         })
    }
    addQuest(){
            if(this.questInput.value && this.statReward.value && this.XPReward.value){
                const id = Math.floor(Math.random()*Date.now()).toString(36)
                this.controller.addQuest(id,this.questInput.value,this.statReward.value,this.XPReward.value)
                this.questInput = ""
                this.statReward = ""
                this.XPReward = ""
                this.renderQuests();
                 this.hideAddModal();
                 this.renderPlayerData();
            }
    }
    renderQuests(){
        this.questsDiv.innerHTML = ""
        this.controller.quests.forEach((eQuest)=>{
            const div = document.createElement("div");
            if(!eQuest.isCompleted){

                div.className = "quest flex items-center justify-between p-4 cursor-pointer border border-system-dark-blue bg-black w-full "
            }
            else{
                div.className = "quest text-gray-500 border-gray-700 opacity-50 p-4 border bg-black/50 hover:bg-system-blue/10 transition-all cursor-pointer flex justify-between items-center group mb-2"
            }
            div.innerHTML = `
              <div class="qinfo flex flex-col">
                <span class="text-white text-lg font-semibold">${eQuest.title}</span
                >
                <span class="text-system-blue text-sm">Rewards: ${eQuest.statReward}, ${eQuest.XPReward} XP</span>
              </div>
              <div class="flex items-center justify-center">
                <div class="checkbox ${eQuest.isCompleted ? "completed": ""} border border-system-blue w-6 h-6" data-id="${eQuest.id}"></div>
              </div>
            `
            this.questsDiv.append(div)
        })
        this.dynamicEventListener();
    }
    dynamicEventListener(){
        document.querySelectorAll(".checkbox").forEach((eBox)=>{
            eBox.addEventListener("click",()=>{
                console.log(eBox.dataset.id)
                this.controller.updateTaskStatus(eBox.dataset.id);
                this.renderPlayerData();
            })
        })
    }
    renderPlayerData(){
        const {name, level,xp,rank, stats} = this.controller.user
        console.log(stats)
        this.playerBasic.innerHTML = `
                  <span
            class="w-40 h-40 flex items-center justify-center rounded-full bg-system-black text-white font-system text-6xl shadow-glow border border-system-blue"
          >
            ${rank}
          </span>

          <span class="playerName">${name}</span>
          <span class="jonInfo text-system-dark-blue">None</span>
          <div id="xpBar">
            <div class="xp-header">
              <span>XP</span>
              <span id="xpinfo">${xp} / 100</span>
            </div>

            <div class="progress-container">
              <div class="progress-fill" id="xpFill"></div>
            </div>
          </div>
          <div class="currentstatus flex gap-4 flex-wrap w-full">
            <div class="strcard flex-1 bg-[#060d12] flex flex-col">
              <span>STR</span>
              <span>${stats.str}</span>
            </div>
            <div class="intcard flex-1 bg-[#060d12] flex flex-col">
              <span>INT</span>
              <span>${stats.int}</span>
            </div>
            <div class="agicard flex-1 bg-[#060d12] flex flex-col">
              <span>AGI</span>
              <span>${stats.agi}</span>
            </div>
          </div>`

    }
}

const app = new UIHandler(new Controller("Alok Maurya"));