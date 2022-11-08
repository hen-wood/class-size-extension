const students = document.querySelectorAll('.classmate-block')
const pics = document.querySelectorAll("body > main > section > ul > li> img")
pics.forEach(pic => pic.setAttribute('src', 'https://phantom-marca.unidadeditorial.es/bbb8eb8c549be38ee2d1eb5b19fef4e2/crop/0x0/977x651/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/31/16672238661731.png'))
const title = document.querySelector('h1')
function setWeek(week) {
    const weekArr = []

    for (let student of students) {
        weekArr.push(student.querySelector('strong').textContent)
    }

    window.localStorage.setItem(`${week}`, JSON.stringify(weekArr))
}
let noUpdateTimeRange = new Set([8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
let today = new Date(Date.now()).getDay()
let thisHour = new Date(Date.now()).getHours()

if (today === 1 || (today === 2 && noUpdateTimeRange.has(thisHour))) {
    alert('Can\'t update until 6pm PST on Tuesday')
} else {
    setWeek('current week')
}
let currentWeek = window.localStorage.getItem('current week')

if (!window.localStorage.getItem('last week')) {
    setWeek('last week')
}

if (!window.localStorage.getItem('this week')) {
    setWeek('this week')
}
let thisWeek = window.localStorage.getItem('this week')
let lastWeek = window.localStorage.getItem('last week')

if (thisWeek !== currentWeek) {
    window.localStorage.setItem('last week', thisWeek)
    window.localStorage.setItem('this week', currentWeek)

}

const lastWeekList = new Set(JSON.parse(lastWeek))
const thisWeekList = new Set(JSON.parse(thisWeek))

let classSizeDiff = thisWeekList.size - lastWeekList.size
let classSizeMessage
if (classSizeDiff > 0) {
    classSizeMessage = `Total Size: ${thisWeekList.size} (+${classSizeDiff} students)`
} else if (classSizeDiff < 0) {
    classSizeMessage = `Total Size: ${thisWeekList.size} (${classSizeDiff} students)`
} else {
    classSizeMessage = `Total Size: ${thisWeekList.size}`
}

let lostStudents = []
lastWeekList.forEach(el => {
    if (!thisWeekList.has(el)) {
        lostStudents.push(el)
    }
})
const lostLength = lostStudents.length
lostStudents = lostStudents.join(', ')

let gainedStudents = []
thisWeekList.forEach(el => {
    if (!lastWeekList.has(el)) {
        gainedStudents.push(el)
    }
})
const gainedLength = gainedStudents.length
gainedStudents = gainedStudents.join(', ')

title.textContent = classSizeMessage

let lostStudentsElement
if (lostStudents.length) {
    lostStudentsElement = `<h2>Students Lost (-${lostLength}): ${lostStudents}</h2>`
} else {
    lostStudentsElement = `<h2>Lost no students from current cohort</h2>`
}
title.insertAdjacentHTML('afterend', lostStudentsElement)

let gainedStudentsElement
if (gainedStudents.length) {
    gainedStudentsElement = `<h2 style="color: green;">Students Gained (+${gainedLength}): ${gainedStudents}</h2>`
} else {
    gainedStudentsElement = `<h2>Gained no students from cohort ahead of us</h2>`
}
title.insertAdjacentHTML('afterend', gainedStudentsElement)
