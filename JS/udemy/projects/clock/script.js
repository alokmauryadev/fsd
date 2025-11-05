let minute = document.getElementById("minute")
let hour = document.getElementById("hour-hand")
let sec = document.getElementById("sec")
function rotateMinute(){
    setInterval(()=>{
    let now = new Date();
    minute.style.transform = `rotate(${6 * now.getMinutes()+90}deg)`;
    hour.style.transform = `rotate(${30 * now.getHours()+90}deg)`;
    }
    ,1000)
    
}

rotateMinute();