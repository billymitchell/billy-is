let pageNumber = 0

//page content is object
const pages = [
  {copy: 'a Baltimore-based graphic designer', background: '#edc7a9', circle: '#3e78ed'},
  {copy: 'the biggest fan of<br><a target="_blank" href="https://www.youtube.com/watch?v=GbF4YoYvQqc">Maribu State</a>', background: '#a1fffe', circle: '#e34a47'},
  {copy: "looking for work in the city that never sleeps</u>", background: '#d3c7f3', circle: '#f7fe00'},
  {
    copy: 'checkout<br><a target="_blank" href="https://drive.google.com/file/d/155vuK5kb58p1a98fKl2V0jtvhHTqx5co/view?usp=sharing">my resume</a>',
    background: '#faffb8',
    circle: '#b472e6'
  }
]
//declair what html eliments are in JS
const nextTag = document.querySelector('footer img.next')
const prevTag = document.querySelector('footer img.prev')
const overlayNext = document.querySelector('.overlay-right')
const overlayPrev = document.querySelector('.overlay-left')
const randomTag = document.querySelector('footer img.rand')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

//Next button
const next = function() {
  //Adds 1 to the page number
  pageNumber = pageNumber + 1
  //pages contains content.length is amount of content in pages.in javascript you count from 0 so thats why you need -1
  if (pageNumber > pages.length - 1) {
    //resets counter back to 0 after cycaling thought content
    pageNumber = 0
  }
  updateSection()
}
//Previus Button
const prev = function() {
  pageNumber = pageNumber - 1
  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }
  updateSection()
}
//Pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)
  updateSection()
}

//When page changes, run pages object number and copy
const updateSection = function() {
  //change .innerHTML
  outputTag.innerHTML = pages[pageNumber].copy
  //change .css style background-color to .backgroundColor
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

//Listen for click on next button, run next
nextTag.addEventListener('click', function() {
  next()
})
//Listen for click on next overlay, run next
overlayNext.addEventListener('click', function() {
  next()
})
//Listen for click on previus button, run prev
prevTag.addEventListener('click', function() {
  prev()
})
//Listen for click on overlay Prev, run prev
overlayPrev.addEventListener('click', function() {
  prev()
})
//Listen for click on random Tag, run random
randomTag.addEventListener('click', function() {
  random()
})

//when a user presses a key check for arrow left/right snf do next or prev. "event can be any name"
document.addEventListener('keyup', function(event) {
  //run this to see what key
  console.log(event)
  //if the key being pressed is "ArrowRight"
  if (event.key == 'ArrowRight') {
    next()
  }
  if (event.key == 'ArrowLeft') {
    prev()
  }
})
