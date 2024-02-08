const hours = new Date().getHours() // get the current hour


const isMorning = hours >= 4 && hours < 12 // is it morning?


const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const showTime = (element, {hours, isMorning, isAfternoon, isEvening}) => {
    element.querySelector('#welcome').textContent = hours
    element.querySelector('#welcome').textContent = isMorning
    element.querySelector('#welcome').textContent = isAfternoon
    element.querySelector('#welcome').textContent = isEvening
}