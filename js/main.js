
let arr = [...document.querySelectorAll('.square_1')].map(function(el) {

// рандом через anime

  el.style.transform = `translate(${anime.random(5, 250)}vw, ${anime.random(0, 50)}vh)`




  // рандом через position функцию

//   function getYPositionOfElement() {
//   var yPosition = Math.floor(Math.random() * window.innerHeight)
//   return yPosition
// }
//   function getXPositionOfElement() {
//   var xPosition = Math.floor(Math.random() * window.innerHeight)
//   return xPosition
// }
//     el.style.transform = RandomXY()
//      function RandomXY(){
//        for (let i = 0; i < 100; i++){
//           $('.square_1' + i).offset({top: getYPositionOfElement(), left: getXPositionOfElement()})
//         }
//      }

//рандомный ховер

 el.onmouseenter  = function(){
   el.style.background = palette[Math.floor(Math.random() * palette.length)]
 }
 el.onmouseleave = function(){
   el.style.background = 'none'
 }

//появление модальных окон

document.getElementById('element_j').onclick = function() {
  document.getElementById('element_j_big').style.display = 'block'
}
document.getElementById('element_j_1').onclick = function() {
  document.getElementById('element_j_big_1').style.display = 'block'
}
document.getElementById('element_es').onclick = function() {
  document.getElementById('element_es_big').style.display = 'block'
}
document.getElementById('element_es_1').onclick = function() {
  document.getElementById('element_es_big_1').style.display = 'block'
}
document.getElementById('element_es_2').style.backgroundColor ='#40E0D0'
document.getElementById('element_es_2').onclick = function(){
  document.querySelector('h1').style.color = '#40E0D0'
}


document.getElementById('element_vo').onclick = function() {
  document.getElementById('element_vo_big').style.display = 'block'
}
document.getElementById('element_vo_1').onclick = function() {
  document.getElementById('element_vo_big_1').style.display = 'block'
}
document.getElementById('element_vo_2').style.backgroundColor ='#67A7AF'
document.getElementById('element_vo_2').onclick = function(){
let svg = document.getElementById('svg')
let path = document.querySelectorAll('path')
for (let i = 0; i < path.length; i++){
  let pathOne = path[i]
  let offset = anime.setDashoffset(pathOne)
  pathOne.setAttribute('stroke-dashoffset', offset)
  anime({
    targets: pathOne,
    strokeDashoffset: [offset, 0],
    duration: 4000,
    delay: 500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  })
}
}

document.getElementById('element_ke').onclick = function() {
  document.getElementById('element_ke_big').style.display = 'block'
}
document.getElementById('element_ke_1').onclick = function() {
  document.getElementById('element_ke_big_1').style.display = 'block'
}
document.getElementById('element_ke_2').style.backgroundColor = '#A79494'
document.getElementById('element_ke_2').onclick = function() {
  document.body.style.backgroundColor = '#1E063E'
  document.querySelector('.name h1').style.color = '#fff'
}

document.getElementById('element_fi').onclick = function() {
  document.getElementById('element_fi_big').style.display = 'block'
}
document.getElementById('element_fi_1').onclick = function() {
  document.getElementById('element_fi_big_1').style.display = 'block'
}
document.getElementById('element_fi_2').style.backgroundColor = '#4C828A'
document.getElementById('element_fi_2').onclick = function() {
  document.getElementById('name').style.webkitFilter = 'blur(10px)'
}
document.getElementById('element_fi_2').onmouseleave = function(){
  document.getElementById('element_fi_2').style.background = '#4C828A'
}

document.getElementById('element_am').onclick = function() {
  document.getElementById('element_am_big_1').style.display = 'block'
}

document.getElementById('element_am_1').onclick = function() {
  document.getElementById('element_am_big_1').style.display = 'block'
}

document.getElementById('element_ap').onclick = function() {
  document.getElementById('element_ap_big').style.display = 'block'
}
document.getElementById('element_ap_1').onclick = function() {
  document.getElementById('element_ap_big_1').style.display = 'block'
}
document.getElementById('element_v').onclick = function() {
  document.getElementById('element_v_big').style.display = 'block'
}
document.getElementById('element_v_1').onclick = function() {
  document.getElementById('element_v_1_big').style.display = 'block'
}
document.getElementById('element_ka').onclick = function() {
  document.getElementById('element_ka_big').style.display = 'block'
}
document.getElementById('element_ka_1').onclick = function() {
  document.getElementById('element_ka_big_1').style.display = 'block'
}
document.getElementById('element_la').onclick = function() {
  document.getElementById('element_la_big').style.display = 'block'
}

document.getElementById('element_la_1').onclick = function() {
  document.getElementById('element_la_big_1').style.display = 'block'
}
document.getElementById('element_mo').onclick = function() {
  document.getElementById('element_mo_big').style.display = 'block'
}
document.getElementById('element_mo_1').onclick = function() {
  document.getElementById('element_mo_big_1').style.display = 'block'
}
document.getElementById('element_kp').onclick = function() {
  document.getElementById('element_kp_big').style.display = 'block'
}
document.getElementById('element_kp_1').onclick = function() {
  document.getElementById('element_kp_big_1').style.display = 'block'
}
document.getElementById('element_f').onclick = function() {
  document.getElementById('element_f_big').style.display = 'block'
}
document.getElementById('element_f_1').onclick = function() {
  document.getElementById('element_f_big_1').style.display = 'block'
}
document.getElementById('element_f_2').style.backgroundColor = '#3F3E5E'
document.getElementById('element_f_2').onclick = function(){
  document.getElementById('name').style.webkitFilter = 'none'
}

document.getElementById('element_ra').onclick = function() {
  document.getElementById('element_ra_big').style.display = 'block'
}
document.getElementById('element_ra_1').onclick = function() {
  document.getElementById('element_ra_big_1').style.display = 'block'
}
document.getElementById('element_ra_2').style.backgroundColor = '#4B2323'
document.getElementById('element_ra_2').onclick = function(){
  document.body.style.backgroundColor = 'inherit'
  document.querySelector('.name img').style.display = 'block'
}


// закрытие рандомных окон

//
// let noCezve = document.getElementById('close_j')
// let bigJ = document.getElementById('element_j_big')
// noCezve.onclick = function(){
//  bigJ.style.display = 'none'
// }

let elem = document.querySelectorAll('.square_2')
let btn = document.querySelectorAll('.close')
elem.forEach(function(btn){
$(btn).on('click', function(btn) {
   $(this).closest('.square_2').hide()
})
})

let palette = ['#40E0D0', '#6D4A4A', '#A79494', '#999999', '#6DC1CD', '#67A7AF', '#4C828A', '#4B2323']

//клонирование элементов массива

    // let cln = el.cloneNode(true)
    // document.body.append(cln)
    // console.log(cln)

//при загрузке

    // window.onload = getCoords(elem)
    //   function getCoords(elem) {
    //     let body = document.body
    //     let clientTop = body.getBoundingClientRect().y
    //     let clientSide = body.getBoundingClientRect().x
    //
    //     let move = function(){
    //       body.scrollTo(clientHeight/2, clientWidth/2)
    //     }
    //   }


})


//анимация тестуры поверх заголовка

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

//анимация свг через функцию

// $('svg').on("click", function() {
//   let path = document.querySelectorAll('.svg_anim path')
//
//   $.each(path, function(key, path) {
//
//   let length = path.getTotalLength()
//   path.style.transition =
//     'none'
//   path.style.strokeDasharray = length + ' ' + length
//   path.style.strokeDashoffset = length
//   path.getBoundingClientRect()
//   path.style.transition =
//     'stroke-dashoffset 3s ease-in'
//   path.style.strokeDashoffset = '0'
// })
// })
