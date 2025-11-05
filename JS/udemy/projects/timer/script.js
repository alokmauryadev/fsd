let timerInterval;
const timerDisplay = document.getElementById('timer-display');
const startTimer = document.getElementById('start');
const time = document.getElementById("time");

startTimer.addEventListener("click",()=>{
    let minutes = time.value;
    setTimer(minutes);
});

function setTimer(minutes) {
    const now = new Date().getTime();
    const deadline = now + (minutes * 60 * 1000);
    clearInterval(timerInterval);

    function updateDisplay() {
        const currentTime = new Date().getTime();
        let remainingTime = deadline - currentTime;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = "00:00";
            return;
        }

        let totalSeconds = Math.floor((remainingTime - 1) / 1000); // adjusted here
        let displayMinutes = Math.floor(totalSeconds / 60);
        let displaySeconds = totalSeconds % 60;

        timerDisplay.textContent = `${String(displayMinutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
    }

    updateDisplay();
    timerInterval = setInterval(updateDisplay, 1000);
}
