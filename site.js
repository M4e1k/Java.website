const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const message = document.querySelector('#hi')

if (isAfternoon) message.textContent = "good afternoon"
if (isMorning) message.textContent = "good morning"
if (isEvening) message.textContent = "good evening"
