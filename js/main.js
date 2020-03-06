
let arr = [...document.querySelectorAll('.square_1')].map(function(el) {
    el.style.transform = `translate(${anime.random(0, 300)}vw, ${anime.random(0, -30)}vh)`
    el.onmouseenter  = function(){
      el.style.background = getRGBColor()
    }
    el.onmouseleave = function(){
      el.style.background = 'none'
    }
    function addEl(){
    let cln = el.cloneNode(true)
    document.body.all_elements.append(cln)
    }
})

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

function getRGBColor(){
  return `rgb(${anime.random(0, 255)}, ${anime.random(0, 255)}, ${anime.random(0, 255)})`
}
document.getElementById('element_j').onclick = document.getElementById('element_j_big').style.display = 'block'
