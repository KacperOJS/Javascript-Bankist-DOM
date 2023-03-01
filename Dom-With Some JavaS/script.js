'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((button)=>{
  button.addEventListener("click",openModal)
})




btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});






console.log(document.documentElement);
console.log(document.body)

const glowna = document.querySelector('.header');

const message = document.createElement("div")
message.classList.add('cookie-message');
message.innerHTML = `We use cookied for improved functionality <button class= "btn btn--close-cookie">Got IT!</button>`
glowna.before(message)

const allButtons = document.getElementsByTagName('button');
console.log(allButtons)

document
.querySelector(".btn--close-cookie")
.addEventListener("click", function(){
  message.parentElement.removeChild(message)
});
message.style.backgroundColor= '#000';
message.style.height='10vh';
message.style.width = '120%';

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

// document.documentElement.style.setProperty('--color-primary' , 'orangered')


const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.designer);
console.log(logo.getAttribute('designer'));


const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click',function(e){
//   e.preventDefault();
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);
//   console.log(e.target.getBoundingClientRect());
//   console.log('current scroll X/Y',window.pageXOffset,pageYOffset);
  
//   // window.scrollTo(s1coords.left + window.pageXOffset ,s1coords.top + window.pageYOffset);
// window.scrollTo({
//  left: s1coords.left + window.pageXOffset,
//  top: s1coords.top + window.pageYOffset,
// })
// })
// section1.scrollIntoView({behavior:'smooth'});


// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener("click",(e)=>{
//     e.preventDefault();
//       const id = el.getAttribute('href');
//       console.log(id);
//       document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })

// 1. ADD event listener  to common parent element
// 2. Determine what element originated the event 

document.querySelector('.nav__links').addEventListener("click",function(el){
  el.preventDefault();
  // console.log(el.currentTarget);
  console.log(el.target);

  //Matching Strategy

  if(el.target.classList.contains("nav__link")){
      const id = el.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior:'smooth'})
  
  }
})
//tabbed components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


tabsContainer.addEventListener("click",(e)=>{
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //guard clause

  if(!clicked) return ;
  tabs.forEach(t=> t.classList.remove('operations__tab--active'))
  tabsContent.forEach(c=>c.classList.remove('operations__content--active')) //remove content
  clicked.classList.add('operations__tab--active');

  //Activate content Area
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active');
  


})










// console.log();

// const h1 =  document.querySelector('h1');

// // h1.addEventListener("mouseenter",function(e){
// //   e.preventDefault();
// //   alert("addeventlistener!")
// // })

// const alerth1 = function(e){
// e.preventDefault();
// alert("addeventlistener! jako funkcja uzywana kilkukrotnie")

// }
// h1.addEventListener("mouseenter",alerth1);


// setTimeout(() => {
//   h1.removeEventListener("mouseenter",alerth1);
// }, 5000);
// //Random Color Generator
 
// const randomGenerator = (a,b) => Math.floor(Math.random()*(b-a + 1) + a);
// // console.log(randomGenerator(0,100))
//  const randomColor = () => `rgb(${randomGenerator(0,255)},${randomGenerator(0,255)},${randomGenerator(0,255)})`;
//  console.log(randomColor(0,255));

//  const nav_link = document.querySelector(".nav__link");
//  nav_link.addEventListener("click",function(e){
//   console.log('dziala');
//    this.style.backgroundColor = randomColor();
//    console.log('LINK', e.target,e.currentTarget);
//    console.log(e.currentTarget === this);

//    //Stop PROpagation
//   //  e.stopPropagation();
//  })



//  const nav_links = document.querySelector(".nav__links");
//  nav_links.addEventListener("click",function(e){
//   console.log('dziala2');
//    this.style.backgroundColor = randomColor();
//    console.log('Container', e.target,e.currentTarget);
   

//  })


//  const nav = document.querySelector(".nav");
//  nav.addEventListener("click",function(e){
//   console.log('dziala3');
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target,e.currentTarget);
//   console.log(this);
//  })