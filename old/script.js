// javascipt for desktop version
// carousel logic
let slideposition = 0;
let slides = document.getElementsByClassName('carousel')
let totalslides = 3

function movetonext(){
    // alert("going next")
    if(slideposition === totalslides-1){
        slideposition = 0;
    }else{ 
        slideposition ++;
    }
    updateslide();
} 
function movetoprev(){
    // alert("going prev")
    if(slideposition === 0){
        slideposition = totalslides-1;
    }else{   
        slideposition --;
    }
    updateslide();
}
function updateslide(){
    for(let slide of slides){
        slide.classList.remove('show');
        slide.classList.add('carousel')
    }
    slides[slideposition].classList.add('show')
}


// section 2 to 3
function openSection2(){
    // alert("hello")
    document.getElementsByClassName('section-2')[0].style.display="none"
    document.getElementsByClassName('section-3')[0].style.display="block"
}
// section 4 upper to 4 lower
function openSection4(){
    document.getElementsByClassName('upper-section4')[0].style.display="none"
    document.getElementsByClassName('lower-section4')[0].style.display="block"
}
// section 5  to 6
function openSection5(){
    document.getElementsByClassName('section-5')[0].style.display="none"
    document.getElementsByClassName('section-6')[0].style.display="block"
}
// section 7  to 8
function openSection7(){
    document.getElementsByClassName('section-7')[0].style.display="none"
    document.getElementsByClassName('section-8')[0].style.display="block"
}
// section 9  to 10
function openSection9(){
    document.getElementsByClassName('section-9')[0].style.display="none"
    document.getElementsByClassName('section-10')[0].style.display="block"
}
// section 11 to follow up call
function openSection11(){
    document.getElementsByClassName('section-11')[0].style.display="none"
    document.getElementsByClassName('section-follow')[0].style.display="block"
}
// section 13 to 14
function openSection13(){
    document.getElementsByClassName('section-13')[0].style.display="none"
    document.getElementsByClassName('section-14')[0].style.display="block"
}
// section 15 to 16
function openSection15(){
    document.getElementsByClassName('section-15')[0].style.display="none"
    document.getElementsByClassName('section-16')[0].style.display="block"
}
// section 17 to 18
function openSection17(){
    document.getElementsByClassName('section-17')[0].style.display="none"
    document.getElementsByClassName('section-18')[0].style.display="block"
}


// javascript for mobile version
// carousel logic
let slideposition_m = 0;
let slides_m = document.getElementsByClassName('carousel-m')
let totalslides_m = 3

function movetonext_m(){
    // alert("going next")
    if(slideposition_m === totalslides_m-1){
        slideposition_m = 0;
    }else{ 
        slideposition_m ++;
    }
    updateslide_m();
} 
function movetoprev_m(){
    // alert("going prev")
    if(slideposition_m === 0){
        slideposition_m = totalslides_m-1;
    }else{   
        slideposition_m --;
    }
    updateslide_m();
}
function updateslide_m(){
    for(let slidem of slides_m){
        slidem.classList.remove('show-m');
        slidem.classList.add('carousel-m')
    }
    slides_m[slideposition_m].classList.add('show-m')
}
// section 2 to 3
function openSection2m(){
    // alert("hello")
    document.getElementsByClassName('section-2-m')[0].style.display="none"
    document.getElementsByClassName('section-3-m')[0].style.display="block"
}
// section 4 upper to 4 lower
function openSection4_m(){
    document.getElementsByClassName('upper-section4-m')[0].style.display="none"
    document.getElementsByClassName('lower-section4-m')[0].style.display="block"
}
// section 5  to 6
function openSection5_m(){
    document.getElementsByClassName('section-5-m')[0].style.display="none"
    document.getElementsByClassName('section-6-m')[0].style.display="block"
}
// section 7  to 8
function openSection7_m(){
    document.getElementsByClassName('section-7-m')[0].style.display="none"
    document.getElementsByClassName('section-8-m')[0].style.display="block"
}
// section 9  to 10
function openSection9_m(){
    document.getElementsByClassName('section-9-m')[0].style.display="none"
    document.getElementsByClassName('section-10-m')[0].style.display="block"
}
// section 11 to follow up call
function openSection11_m(){
    document.getElementsByClassName('section-11-m')[0].style.display="none"
    document.getElementsByClassName('section-follow-m')[0].style.display="block"
}
// section 13 to 14
function openSection13_m(){
    document.getElementsByClassName('section-13-m')[0].style.display="none"
    document.getElementsByClassName('section-14-m')[0].style.display="block"
}
// section 15 to 16
function openSection15_m(){
    document.getElementsByClassName('section-15-m')[0].style.display="none"
    document.getElementsByClassName('section-16-m')[0].style.display="block"
}