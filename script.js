
//loader

var loader = document.querySelector("#loader")
setTimeout(function(){
  loader.style.top = "-100%";
},4000)


// hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// navbar

var tl = gsap.timeline()
tl.from("#nav h1",{
  y:-35,
  opacity:0,
  duration:1,
  delay:0.5
})


// icons

gsap.from("#left-icon-node",{
  y:80,
  x:1,
  duration:2,
  ease:"power3",
  repeat:-1,
  yoyo:true,

})

gsap.from("#right-icon-react",{
  y:80,
  x:5,
  duration:2,
  ease:"power3",
  repeat:-1,
  yoyo:true,
  smooth:true

})












//                 cursor

var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var page1 = document.querySelector("#page1");
var page2 = document.querySelector("#page2");
var page3 = document.querySelector("#page3");
var swiper = document.querySelector("#swiperDiv");
var icons = document.querySelector(".icon-container");
var footer = document.querySelector("#footer");



main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
  })
})

page1.addEventListener("mouseenter",function(dets){
  cursor.innerHTML = "Hello"
  gsap.to(cursor,{
    scale:4,
    backgroundColor:"#ffffff7c"
  })
})

page1.addEventListener("mouseleave",function(dets){
  gsap.to(cursor,{
    scale:1,
  })
})



page2.addEventListener("mouseenter",function(dets){
  cursor.innerHTML = "Go Slow"
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#e7fff9",
    blur:1,
  })
})

page2.addEventListener("mouseleave",function(dets){
  gsap.to(cursor,{
    
  })
})

swiper.addEventListener("mouseenter",function(dets){
  cursor.innerHTML = "Hover me"
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"black",
  })
})

swiper.addEventListener("mouseleave",function(dets){
  gsap.to(cursor,{
    scale:1,
  })
})

page4.addEventListener("mouseenter",function(dets){
  gsap.to(cursor,{
    scale:0.2,
    backgroundColor:"white"
  })
})





footer.addEventListener("mouseenter",function(dets){
  cursor.innerHTML = "Hello"
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#fddffd7c"
  })
})









//  page2

gsap.from("#page2",{    
  scale:0,
  duration:0.3,
  scrollTrigger:{
   trigger:"#page2",
   scroller:"body",
   delay:0.2,
   scale:2,
   scrub:1
  }
 }
)



var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:"body",
        scrub:.5,
        duration:0.3,
    },
    stagger:.2,
    color:`#fff`
})






// #page3


gsap.to("#page3 h1",{
  transform:"translateX(-115%)",
  scrollTrigger:{
    trigger:"#page3 h1",
    scroller:"body",
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin:true


  }
})



gsap.to("#page3", {
  backgroundColor: "white",
  scrollTrigger: {
    trigger: "#page3",
    start: "top 20%",
    end:"top bottom",
    // markers:true,
    scrub:2
  }
});




// x............x...............................x............................x.......................................x

//                                                      swiper 


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,


  pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});







//                  page4


gsap.to("#page4", {
  backgroundColor: "#0C0C0C",
  scrollTrigger: {
    trigger: "#page4",
    start: "top 5%",
    end:"top bottom",
    scrub:2
  }
});

// icons

// var btn = document.querySelector("#page4 button");
var inp = document.querySelector("#profileInputContainer input");
var inp2 = document.querySelector("#emailInputContainer input");
var inp3 = document.querySelector("#messageInputContainer textarea");


document.getElementById('profileIcon').addEventListener('click', function() {
  var profileInputContainer = document.getElementById('profileInputContainer')
  if ( profileInputContainer.style.display === 'block') {
      profileInputContainer.style.display = 'none';
  } else {
      profileInputContainer.style.display = 'block';
      inp.value = " "; 
  }
});

document.getElementById('emailIcon').addEventListener('click', function() {
  var emailInputContainer = document.getElementById('emailInputContainer');
  if (emailInputContainer.style.display === 'block') {
      emailInputContainer.style.display = 'none';
  } else {
      emailInputContainer.style.display = 'block';
      inp2.value = " ";
  }
});

document.getElementById('messageIcon').addEventListener('click', function() {
  var messageInputContainer = document.getElementById('messageInputContainer');
  if (messageInputContainer.style.display === 'block') {
      messageInputContainer.style.display = 'none';
  } else {
      messageInputContainer.style.display = 'block';
      inp3.value = " ";
  }
});






// string

var path = "M 10 100 Q 500 100 990 100";
var finalPath = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
  gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out"
  })
})

string.addEventListener("mouseleave",function(){
  gsap.to("svg path",{
    attr:{d:finalPath},
    duration:1.5,
    ease:"elastic.out(1,0,2)"

  })
})



//button

document.getElementById('downloadCvBtn').addEventListener('click', function() {
  // Specify the URL of the PDF file (ensure the path is correct)
  const pdfUrl = 'file:///C:/Users/Ayush%20Yadav/OneDrive/Desktop/Ayush%20Resume.pdf';  // Replace this with the actual path to your CV file
  
  // Create an anchor element
  const a = document.createElement('a');
  
  // Set the href attribute to the URL of the PDF
  a.href = pdfUrl;
  
  // Set the download attribute to suggest a filename
  a.download = 'file:///C:/Users/Ayush%20Yadav/OneDrive/Desktop/Ayush%20Resume.pdf';  // You can change the filename as needed
  
  // Append the anchor to the body (required for Firefox)
  document.body.appendChild(a);
  
  // Trigger the download by simulating a click
  a.click();
  
  // Remove the anchor from the document
  document.body.removeChild(a);
});












