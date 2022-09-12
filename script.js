const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const particalArray = []
hue= 0
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

const mouse = {
    x: undefined,
    y: undefined,
}