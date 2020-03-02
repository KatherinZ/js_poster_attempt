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
    el.style.transform = `translate(${anime.random(0, 300)}vw, ${anime.random(0, 50)}vh)`
})
let numberOfWords = 18
  for (let i = 0; i < numberOfWords; i++){
    arr.push('.square_1')
    return arr
}
let animatedMorph = anime({
  targets: '.name img',
  keyframes: [
    {translateY: 10},
    {translateX: -40},
    {translateY: -40},
    {translateX: 30},
    {translateY: 20},
    {translateX: 45},
    {translateY: 10},
    {translateX: -40},
    {translateY: -40},
    {translateX: 30},
    {translateY: 20},
    {translateX: 45}
  ],
  loop: true,
  direction: 'alternate',
  duration: 20000,
  easing: 'easeInQuad'
})

// function duplicate(arr){
//   let temp = arr.slice()
//   for (i = 0; i < arr.length; i++){
//     temp.push(arr[i])
//   }
//   return temp
// }
