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


[...document.querySelectorAll('.square_1')].map(function(el) {
    el.style.transform = `translate(${anime.random(0, 100)}vw, ${anime.random(0,100)}vh)`
})
