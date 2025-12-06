let logger = document.querySelector(".console")
let span = document.createElement("span")
logger.append(span)

span.textContent = `${localStorage.getItem("alok")}`