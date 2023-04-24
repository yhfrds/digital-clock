const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = h > 12 ? ((h = h - 12), "PM") : "AM";

    hourEl.innerText = h < 10 ? (h = "0" + h) : h
    minuteEl.innerText = m < 10 ? (m = "0" + m) : m
    secondEl.innerText = s < 10 ? (s = "0" + s) : s
    ampmEl.innerText = ampm
    setTimeout(() => { updateClock() }, 1000)
}
updateClock()