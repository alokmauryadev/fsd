function generateCard(title, duration, views, channelName, monthsOld, thumbnail){
    let formatView = "";
    if(Number(views)>=(10**9)){
        formatView = Math.floor(views/1000000) + "M"
    }
    else if(Number(views)>=(10**6)){
        formatView = (Math.floor(views/100000)/10) + "M"
    }
    else if(Number(views)>=(10**3)){
        formatView = (Math.floor(views/100)/10) + "K"
    }
    //card
    let container = document.getElementsByClassName("container")[0]
    let card = document.createElement("div")
    container.append(card)
    card.setAttribute("class","card")
    card.innerHTML = `<div class="thumbnail">
           <div class="img"> <img src="${thumbnail}" alt=""></div>
           <div class="duration">${duration}</div>
        </div>
        <div class="dtl">
            <div class="title">${title}</div>
            <div class="subtitles">
                <div class="subtitle channelNames">${channelName}</div>
                <span class="subtitle"> • </span>
                <div class="subtitle views">${formatView} Views</div>
                                <span class="subtitle"> • </span>
                <div class="subtitle monthsOld">${monthsOld} Months Old</div>
            </div>
        </div>
`
}