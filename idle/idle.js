console.log('Renderer Start')
//let $ = require('jquery')

const btn = document.getElementById('btn')
const counter = document.getElementById('counter')
let tick = 1

function func() {
    const oldValue = Number(counter.innerText)
    const newValue = oldValue + tick
    counter.innerText = newValue
}
btn.addEventListener('click', async () => {
    const oldValue = Number(counter.innerText)
    const newValue = oldValue + tick
    counter.innerText = newValue
    setInterval(func, 1000)
})