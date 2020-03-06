
let arr = [...document.querySelectorAll('.square_1')].map(function(el) {
    el.style.transform = `translate(${anime.random(0, 300)}vw, ${anime.random(0, -30)}vh)`
})
// let numberOfWords = 18
//   for (let i = 0; i < numberOfWords; i++){
//     arr.push('.square_1')
//     return arr
// }
let animatedMorph = anime({
  targets: '.name img',
  scaleX: [
    { value: 4, duration: 13000},
    { value: 1, duration: 9200},
    { value: 4, duration: 9400, delay: 500},
    { value: 1, duration: 10300 }
  ],
  scaleY: [
  { value: [1.75, 1], duration: 13000},
  { value: 2, duration: 9200 },
  { value: 1, duration: 8900 },
  { value: 1.75, duration: 9600, delay: 1000},
  { value: 1, duration: 11000 }
],
  loop: true,
  direction: 'alternate',
  easing: 'linear'
})
// let elem = document.getElementsByClassName('square_1')
// arr.forEach(function(v) {
//   v.addEventListener('mouseenter', function(){
//     this.style.background = getRGBColor()
//   })
//   v.addEventListener('mouseleave', function(){
//     this.style.background = 'inherit'
//   })
// })
// function changeBack(){
//   for (let i = 0; i < arr.length; i++){
//     document.getElementsByClassName('square_1')[5].style.background = getRGBColor()
//   }
// }
// document.getElementsByClassName('square_1')[5].onmouseenter = getRGBColor()

arr.forEach(getRGBColor())

function getRGBColor(){
  return `rgb(${anime.random(0, 255)}, ${anime.random(0, 255)}, ${anime.random(0, 255)})`
}
