console.log('App Start')
//let $ = require('jquery')

const total = document.getElementById('total')
const upgradeButton = document.getElementById('btn-upgrade')
const upgradeCost = document.getElementById('cost')
const clickButton = document.getElementById('btn-click')

let tickValue = 1

clickButton.addEventListener('click', async () => {
    tick()
})

upgradeButton.addEventListener('click', async () => {
    const oldTotal = Number(total.innerText)
    total.innerText = oldTotal - Number(upgradeCost.innerText)
    tickValue++
    const oldCost = Number(upgradeCost.innerText)
    upgradeCost.innerText = oldCost * 2
    checkCosts()
})

function tick() {
    const oldValue = Number(total.innerText)
    const newValue = oldValue + tickValue
    total.innerText = newValue

    checkCosts()
}

function checkCosts() {
    if (Number(total.innerHTML) >= Number(upgradeCost.innerText)) {
        upgradeButton.classList.remove('disabled')
    } else {
        upgradeButton.classList.add('disabled')
    }
}