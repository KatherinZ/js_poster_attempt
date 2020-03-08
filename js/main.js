
let arr = [...document.querySelectorAll('.square_1')].map(function(el) {
    el.style.transform = `translate(${anime.random(0, 300)}vw, ${anime.random(0, 10)}vh)`
    el.onmouseenter  = function(){
      el.style.background = getRGBColor()
    }
    el.onmouseleave = function(){
      el.style.background = 'none'
    }

el.onclick = function() {
  document.getElementById('element_j_big').style.display = 'block'
}

document.getElementById('element_vo').onclick = function() {
  document.getElementById('element_vo_big').style.display = 'block'
}

document.getElementById('element_ke').onclick = function() {
  document.getElementById('element_ke_big').style.display = 'block'
}


document.getElementById('element_fi').onclick = function() {
  document.getElementById('element_fi_big').style.display = 'block'
}

document.getElementById('element_am').onclick = function() {
  document.getElementById('element_am_big').style.display = 'block'
}

document.getElementById('element_ap').onclick = function() {
  document.getElementById('element_ap_big').style.display = 'block'
}

  document.getElementById('element_v').onclick = function() {
    document.getElementById('element_v_big').style.display = 'block'
}
document.getElementById('element_lu').onclick = function() {
  document.getElementById('element_lu_big').style.display = 'block'
}

    let cln = el.cloneNode(true)
    document.body.append(cln)
    console.log(cln)
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
