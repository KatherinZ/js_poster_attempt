// anime.set('.square_1', {
//   translateX: function() { return anime.random(50, 250); },
// });

// let elementsArray = document.querySelectorAll('.all_elements .square_1')
// function shuffle(elementsArray){
// let count = 0
// while (elementsArray.length > count) {
//   square_1.style.translateX = getRandomValue()
//   square_1.style.translateY = getRandomValue()
//   count += 1
// }
// return elementsArray
// }
// onload shuffle(elementsArray)

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
document.getElementsByClassName('all_elements').style.height = 1200 + 'px'
// function duplicate(arr){
//   let temp = arr.slice()
//   for (i = 0; i < arr.length; i++){
//     temp.push(arr[i])
//   }
//   return temp
// }
