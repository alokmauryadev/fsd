class Animator{
    constructor(query){
        this.el = document.querySelector(query)
    }
    fadeOut(time,toogle=false){
        if(toogle && this.el.classList.contains("fadeout-active")){
            this.el.style.opacity = 1;
            this.el.classList.remove("fadeout-active");
        }
        else{
            this.el.style.transition = `all ${time}s ease`;
            this.el.style.opacity = 0;
            this.el.classList.add("fadeout-active");
        }
    }
    move(time,toogle=false,{x=0,y=0}){
        if(toogle && this.el.classList.contains("move-active")){
            this.el.style.transform = "translate(0px,0px)";
            this.el.classList.remove("move-active");
        }
        else{
            this.el.style.transition = `all ${time}s ease`;
            this.el.style.transform = `translate(${x}px,${y}px`;
            this.el.classList.add("move-active");
        }
    }
}

const intro = new Animator(".intro")
const btnEl = new Animator("#btn")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    intro.fadeOut(1,true);
    intro.move(.5,true,{x:40,y:60})
    btnEl.move(.5,true,{x:30,y:60})
})