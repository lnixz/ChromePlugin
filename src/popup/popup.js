function getNowDate() {
    return new Date()
}

function setDate(el,date) {
    el.innerHTML = String(date)
}

function $(selector) {
    return document.querySelector(selector)
}

setDate($('#app'), getNowDate())