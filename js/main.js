
let arr = [...document.querySelectorAll('.square_1')].map(function(el) {

// рандом через anime

  el.style.transform = `translate(${anime.random(5, 150)}vw, ${anime.random(0, 50)}vh)`




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
let palette = ['#40E0D0', '#6D4A4A', '#A79494', '#999999', '#6DC1CD', '#67A7AF', '#4C828A', '#4B2323']

 el.onmouseenter  = function(){
   el.style.background = palette[Math.floor(Math.random() * palette.length)]
 }
 el.onmouseleave = function(){
   el.style.background = 'none'
 }

//появление модальных окон

// document.getElementById('element_ra').onclick = function() {
//   document.getElementById('element_ra_big').style.display = 'block'
// }
// document.getElementById('element_ra_1').onclick = function() {
//   document.getElementById('element_ra_big_1').style.display = 'block'
// }
// document.getElementById('element_ra_2').style.backgroundColor = 'rgba(109, 74, 74, 0.5)'
// document.getElementById('element_ra_2').onclick = function(){
//   document.querySelector('.name h1').style.color = '#79D5E0'
//   document.querySelector('.name img').style.display = 'block'
// }
// document.getElementById('element_ra_2').onmouseleave = function(){
//   document.getElementById('element_ra_2').style.backgroundColor = 'rgba(109, 74, 74, 0.5)'
// }



// открытие-закрытие рандомных окон



let squareOneList = document.querySelectorAll('.inside_0 .square_1', '.inside_1 .square_1')
let squareTwoList = document.querySelectorAll('.inside_0 .square_2', '.inside_1 .square_2')

Array.from(squareOneList).forEach(element => {

  let childSquareTwo = element.querySelector('.inside_0 .square_2', '.inside_1 .square_2')
  let closeBtn = childSquareTwo.querySelector('.close')

  element.onclick = function(){
    childSquareTwo.style.display = 'block'
  }
  closeBtn.onclick = function(e){
    e.stopPropagation()
    childSquareTwo.style.display = 'none'
  }
})

// анимации элементов из inside_2
// 1
document.getElementById('element_j_2').style.backgroundColor = 'rgba(15, 13, 105, 0.4)'
document.getElementById('element_j_2').onclick = function() {
  document.querySelector('.horizontal_pipes').style.opacity = '0.6'
  let svg0 = document.querySelectorAll('.horizontal_pipes svg')
  let path0 = document.querySelectorAll('.horizontal_pipes path')
  for (let i = 0; i < path0.length; i++){
    let pathOne = path0[i]
    let offset = anime.setDashoffset(pathOne)
    pathOne.setAttribute('stroke-dashoffset', offset)
    anime({
      targets: pathOne,
      strokeDashoffset: [offset, 0],
      duration: 4000,
      delay: 500,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    })
  }
}
document.getElementById('element_j_2').onmouseleave = function(){
  document.getElementById('element_j_2').style.backgroundColor = 'rgba(15, 13, 105, 0.4)'
}

//2
document.getElementById('element_es_2').style.backgroundColor = 'rgba(64, 224, 208, 0.4)'
document.getElementById('element_es_2').onclick = function(){
  document.querySelector('h1').style.color = '#40E0D0'
}
document.getElementById('element_es_2').onmouseleave = function(){
  document.getElementById('element_es_2').style.backgroundColor = 'rgba(64, 224, 208, 0.4)'
}

//3
document.getElementById('element_vo_2').style.backgroundColor = 'rgba(16, 80, 94, 0.4)'
document.getElementById('element_vo_2').onclick = function() {
  document.getElementById('name').animate([
    {opacity: 0.5},
    {opacity: 0.1},
    {opacity: 0.4},
    {opacity: 1}
  ], {
    duration: 1000,
    loop: true,
    direction: 'alternate',
    autoplay: true
  })
}
document.getElementById('element_vo_2').onmouseleave = function(){
  document.getElementById('element_vo_2').style.backgroundColor = 'rgba(16, 80, 94, 0.4)'
}

//4
document.getElementById('element_ke_2').style.backgroundColor = 'rgba(154, 101, 101, 0.4)'
document.getElementById('element_ke_2').onclick = function() {
  document.querySelector('.name h1').style.color = '#fff'
}
document.getElementById('element_ke_2').onmouseleave = function(){
  document.getElementById('element_ke_2').style.backgroundColor = 'rgba(154, 101, 101, 0.4)'
}

//5
document.getElementById('element_fi_2').style.backgroundColor = 'rgba(76, 130, 138, 0.4)'
document.getElementById('element_fi_2').onclick = function() {
  document.getElementById('name').style.webkitFilter = 'blur(10px)'
}
document.getElementById('element_fi_2').onmouseleave = function(){
  document.getElementById('element_fi_2').style.backgroundColor = 'rgba(76, 130, 138, 0.4)'
}

//6
document.getElementById('element_am_2').style.backgroundColor = 'rgba(153, 153, 153, 0.4)'
document.getElementById('element_am_2').onclick = function() {
  document.querySelector('.pipes').style.opacity = '0.6'
  let svg1 = document.querySelectorAll('.pipes svg')
  let path1 = document.querySelectorAll('.pipes path')
  for (let i = 0; i < path1.length; i++){
    let pathOne = path1[i]
    let offset = anime.setDashoffset(pathOne)
    pathOne.setAttribute('stroke-dashoffset', offset)
    anime({
      targets: pathOne,
      strokeDashoffset: [offset, 0],
      duration: 4000,
      delay: 500,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    })
  }
}
document.getElementById('element_am_2').onmouseleave = function(){
  document.getElementById('element_am_2').style.backgroundColor = 'rgba(153, 153, 153, 0.4)'
}

//7
document.getElementById('element_ap_2').style.backgroundColor = 'rgba(60, 189, 218, 0.4)'
document.getElementById('element_ap_2').onclick = function() {
  document.querySelector('.pipes').style.opacity = '0'
  document.querySelector('.horizontal_pipes').style.opacity = '0'
}
document.getElementById('element_ap_2').onmouseleave = function() {
  document.getElementById('element_ap_2').style.backgroundColor = 'rgba(60, 189, 218, 0.4)'
}

//8
// document.getElementById('element_v_2').style.backgroundColor = 'rgba()'
// document.getElementById('element_v_2').onclick = function() {
//
// }
// document.getElementById('element_v_2').onmouseleave = function(){
//   document.getElementById('element_v_2').style.backgroundColor = 'rgba()'
// }

//9
// document.getElementById('element_ka_2').style.backgroundColor = 'rgba()'
// document.getElementById('element_ka_2').onclick = function() {
//
// }
// document.getElementById('element_ka_2').onmouseleave = function(){
//   document.getElementById('element_ka_2').style.backgroundColor = 'rgba()'
// }

//10
document.getElementById('element_la_2').style.backgroundColor = 'rgba(153, 158, 199, 0.4)'
document.getElementById('element_la_2').onclick = function() {
  document.querySelector('.name img').style.display = 'none'
}
document.getElementById('element_la_2').onmouseleave = function(){
  document.getElementById('element_la_2').style.backgroundColor = 'rgba(153, 158, 199, 0.4)'
}

//11
// document.getElementById('element_kp_2').style.backgroundColor = 'rgba()'
// document.getElementById('element_kp_2').onclick = function() {
//
// }
// document.getElementById('element_kp_2').onmouseleave = function(){
//   document.getElementById('element_kp_2').style.backgroundColor = 'rgba()'
// }

//12
document.getElementById('element_f_2').style.backgroundColor = 'rgba(63, 62, 94, 0.4)'
document.getElementById('element_f_2').onclick = function(){
  document.getElementById('name').style.webkitFilter = 'none'
}
document.getElementById('element_f_2').onmouseleave = function(){
  document.getElementById('element_f_2').style.backgroundColor = 'rgba(63, 62, 94, 0.4)'
}

//13
// document.getElementById('element_ra_2').style.backgroundColor = 'rgba()'
// document.getElementById('element_ra_2').onclick = function() {
//
// }
// document.getElementById('element_ra_2').onmouseleave = function(){
//   document.getElementById('element_ra_2').style.backgroundColor = 'rgba()'
// }

//14
// document.getElementById('element_mo_2').style.backgroundColor = 'rgba()'
// document.getElementById('element_mo_2').onclick = function() {
//
// }
// document.getElementById('element_mo_2').onmouseleave = function(){
//   document.getElementById('element_mo_2').style.backgroundColor = 'rgba()'
// }

})


//клонирование элементов массива

    // let cln = el.cloneNode(true)
    // document.body.append(cln)
    // console.log(cln)



// прокрутка при загрузке страницы

// $(window).ready(function(){
//   $('html, body').animate({scrollTop: 1000})
//   $('html, body').animate({scrollLeft: 550})
// })


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

 // анимация свг внутри больших квадратов
let svg2 = document.querySelectorAll('.all_elements svg')
let path2 = document.querySelectorAll('.all_elements path')
for (let i = 0; i < path2.length; i++){
  let pathOne = path2[i]
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
