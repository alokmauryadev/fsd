class filter{
    constructor(value,min,max,unit){
        this.value = value;
        this.min = min;
        this.max =max;
        this.unit = unit;
    }
}
const filters = {
    brightness: new filter(100,0,200,"%"),
    contrast: new filter(100,0,200,"%"),
    exposure: new filter(200,0,200,"%"),
    saturation: new filter(100,0,200,"%"),
    hueRotation:new filter(0,0,200,"deg"),
    blur:new filter(100,0,200,"px"),
    grayscale:new filter(100,0,200,"%"),
    sepia:new filter(0,0,100,"%"),
    opacity:new filter(100,0,100,"%"),
    invert:new filter(0,0,200,"%")
}


class UIManager{
    constructor(){
        this.filtersDiv = document.querySelector(".filters")
        this.imgPreview = document.querySelector("#image-preview")
        this.imgInput = document.querySelector("#upload-image")
        this.canvasCtx = this.imgPreview.getContext("2d")
        this.createFilters()
        this.imagefile = null;
        this.img = null;
        this.init()
        
    }
    init(){
        this.imgInput.addEventListener("change",(event)=>{
            console.log(event)
            this.imagefile = event.target.files[0]
            this.showPreview()
        })
        this.filtersDiv.addEventListener("change",(e)=>{
            if(e.target.type==="range"){
                // console.log(e.target.name)
                // console.log(e.target.dataset.unit)
                this.applyFilters(e.target.name,e.target.value,e.target.dataset.unit)

            }
        })
    }
    showPreview(){
        const img = new Image()
        img.src = URL.createObjectURL(this.imagefile)
        document.querySelector(".placeholder").style.display = "none"
        this.img = img
        console.log(img)
        img.onload = () =>{
            this.imgPreview.width = img.width
            this.imgPreview.height = img.height
            this.canvasCtx.drawImage(img,0,0)
        }
    }
    applyFilters(filter,value,unit){
        this.canvasCtx.filter =`${filter}(${value}${unit})`
        this.canvasCtx.drawImage(this.img,0,0)
    }
    createFilters(){
        this.filtersDiv.innerHTML = ""
        for (const [opt,value] of Object.entries(filters)) {
                        const div = document.createElement("div");
            div.className = "filter"
            div.innerHTML = `
            <p>${opt}</p>
            <input name="${opt}" value="${value.value}" type="range" min="${value.min}" max="${value.max}" data-unit="${value.unit}">
            `
        this.filtersDiv.append(div)}}}
const ui = new UIManager();
